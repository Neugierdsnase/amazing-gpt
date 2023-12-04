use std::{fs, io, path::Path};

use database::{connect, create_gpt}; // Include the IO module for handling IO-related operations

mod database;
mod gpt;
mod webparser;

fn get_file_paths(directory_path: &str) -> Result<Vec<String>, io::Error> {
    let mut file_paths = Vec::new();

    if Path::new(directory_path).is_dir() {
        for entry in fs::read_dir(directory_path)? {
            let path = entry?.path();
            if path.is_file() {
                file_paths.push(path.to_str().unwrap().to_string());
            }
        }
    } else {
        return Err(io::Error::new(
            io::ErrorKind::NotFound,
            "Directory not found",
        ));
    }

    Ok(file_paths)
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Specify the path to your HTML file
    let file_paths = get_file_paths("./content/").unwrap();
    let file_paths: Vec<&str> = file_paths.iter().map(|s| s.as_str()).collect();

    let gpt_infos = webparser::parse(file_paths);

    let db = connect().await?;

    // Create a GPT records in the database
    for gpt_ino in &gpt_infos {
        create_gpt(&db, gpt_ino).await?;
    }

    Ok(())
}
