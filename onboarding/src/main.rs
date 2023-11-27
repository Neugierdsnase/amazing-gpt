use chrono::Utc;
use scraper::{Html, Selector};
use serde_json;
use std::fs; // Include the filesystem module for reading files
use std::io; // Include the IO module for handling IO-related operations
use uuid::Uuid; // Assuming UuidType refers to a UUID, you'll need the `uuid` crate // Assuming utc_now refers to a UTC timestamp, you'll need the `chrono` crate
use serde::Serialize;

#[derive(Debug, Serialize)]
struct Author {
    name: Option<String>,
    url: Option<String>,
}

#[derive(Debug, Serialize)]
struct GPTInfo {
    name: String,
    author: Author,
    description: String,
    tags: Vec<String>,
    added: String,
    updated: String,
    id: String, 
    url: String,
    image: String,
}

impl Default for GPTInfo {
    fn default() -> Self {
        GPTInfo {
            id: Uuid::new_v4().to_string(),
            name: String::new(),
            description: String::new(),
            tags: Vec::new(),
            author: Author {
                name: None,
                url: None,
            },
            added: Utc::now().to_rfc3339(),
            updated: Utc::now().to_rfc3339(),
            url: String::new(),
            image: String::new(),
        }
    }
}

fn main() -> io::Result<()> {
    // Specify the path to your HTML file
    let file_paths = vec!["./content/prompt-perfector.html"];

    let mut gpt_infos: Vec<GPTInfo> = Vec::new();

    for file_path in file_paths {
        // Read the contents of the file
        let html = fs::read_to_string(file_path)?;

        let document = Html::parse_document(&html);

        // url
        let url_selector = Selector::parse(
            "a.flex.items-center.rounded-lg.bg-green-600.px-4.py-2.font-medium.text-white.transition",
        )
        .unwrap();
        let unformatted_url = document
            .select(&url_selector)
            .next()
            .unwrap()
            .value()
            .attr("href")
            .unwrap()
            .split("next=")
            .last()
            .unwrap();
        let url = format!("https://chat.openai.com{}", unformatted_url);

        // image
        let image_selector = Selector::parse(".gizmo-shadow-stroke > img").unwrap();
        let image_url = document
            .select(&image_selector)
            .next()
            .unwrap()
            .value()
            .attr("src")
            .unwrap();

        // name
        let name_selector = Selector::parse("div.text-center.text-2xl.font-medium").unwrap();
        let name = document
            .select(&name_selector)
            .next()
            .unwrap()
            .text()
            .collect::<Vec<_>>()
            .join("");

        // description
        let description_selector = Selector::parse(
            "div.max-w-md.text-center.text-xl.font-normal.text-token-text-secondary",
        )
        .unwrap();
        let description = document
            .select(&description_selector)
            .next()
            .unwrap()
            .text()
            .collect::<Vec<_>>()
            .join("")
            .trim()
            .to_string();

        // author
        let author_selector = Selector::parse("a.underline").unwrap();

        let author = match document.select(&author_selector).next() {
            Some(element) => {
                let text_content = element.text().collect::<Vec<_>>().join("");
                let url = element.value().attr("href").unwrap().to_string();
                Author {
                    name: Some(text_content),
                    url: Some(url),
                }
            }
            None => {
                let alternative_author_selector =
                    Selector::parse(".text-sm.text-token-text-tertiary");
                let alternative_author = document
                    .select(&alternative_author_selector.unwrap())
                    .next()
                    .unwrap()
                    .text()
                    .collect::<Vec<_>>()
                    .join("")
                    .trim()
                    .to_string();
                // cut off the "By " at the beginning
                let alternative_author = alternative_author[3..].trim().to_string();
                Author {
                    name: Some(alternative_author),
                    url: None,
                }
            }
        };

        gpt_infos.push(GPTInfo {
            name,
            author,
            description,
            url,
            image: image_url.to_string(),
            ..Default::default()
        });
    }

    for gpt_info in gpt_infos {
        // write to a typescript file
        let file_name = gpt_info.name.replace(" ", "-").to_lowercase();
        let ts_file_path = format!("./content/{}.ts", file_name);
        let ts_file_content = format!(
            "export const {} = {}",
            gpt_info.name.replace(" ", ""),
            serde_json::to_string(&gpt_info).unwrap()
        );
        fs::write(ts_file_path, ts_file_content)?;
    }

    Ok(())
}
