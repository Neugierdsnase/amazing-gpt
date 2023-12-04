use crate::gpt::{Author, GptRecord, Name};
use scraper::{Html, Selector};
use std::fs;

pub fn parse(file_paths: Vec<&str>) -> Vec<GptRecord> {
    let mut gpt_infos: Vec<GptRecord> = Vec::new();

    for file_path in file_paths {
        dbg!(&file_path);
        // Read the contents of the file
        let html = fs::read_to_string(file_path).unwrap();

        let document = Html::parse_document(&html);

        // slug
        let url_selector = Selector::parse(
            "a.flex.items-center.rounded-lg.bg-green-600.px-4.py-2.font-medium.text-white.transition",
        )
        .unwrap();
        let slug = String::from(
            document
                .select(&url_selector)
                .next()
                .unwrap()
                .value()
                .attr("href")
                .unwrap()
                .split("next=/g/")
                .last()
                .unwrap(),
        );

        let id = slug.replace("-", "_");

        // image
        let image_selector = Selector::parse(".gizmo-shadow-stroke > img").unwrap();
        let image = String::from(
            document
                .select(&image_selector)
                .next()
                .unwrap()
                .value()
                .attr("src")
                .unwrap(),
        );

        // name
        let name_selector = Selector::parse("div.text-center.text-2xl.font-medium").unwrap();
        let display_name = document
            .select(&name_selector)
            .next()
            .unwrap()
            .text()
            .collect::<Vec<_>>()
            .join("");
        let name = Name {
            display: display_name.clone(),
            sort: display_name
                .to_lowercase()
                .replace(" ", "")
                .trim()
                .to_string(),
        };

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
                    name: text_content,
                    url,
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
                    name: alternative_author,
                    url: String::new(),
                }
            }
        };

        gpt_infos.push(GptRecord {
            id,
            name,
            author,
            description,
            slug,
            image,
            ..Default::default()
        });
    }

    gpt_infos
}
