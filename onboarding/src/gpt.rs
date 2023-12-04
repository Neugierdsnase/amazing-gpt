use chrono::Utc;
use serde::Serialize;

#[derive(Debug, Serialize)]
pub struct Name {
    pub display: String,
    pub sort: String,
}

#[derive(Debug, Serialize)]
pub struct Author {
    pub name: String,
    pub url: String,
}

#[derive(Debug, Serialize)]
pub struct GptRecord {
    pub id: String,
    pub name: Name,
    pub author: Author,
    pub description: String,
    pub tags: Vec<String>,
    pub added: String,
    pub updated: String,
    pub slug: String,
    pub image: String,
}

impl Default for GptRecord {
    fn default() -> Self {
        GptRecord {
            id: String::new().into(),
            name: Name {
                display: String::new(),
                sort: String::new(),
            },
            description: String::new(),
            tags: Vec::new(),
            author: Author {
                name: String::new(),
                url: String::new(),
            },
            added: Utc::now().to_rfc3339(),
            updated: Utc::now().to_rfc3339(),
            slug: String::new(),
            image: String::new(),
        }
    }
}
