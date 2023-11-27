use std::collections::BTreeMap;

use crate::gpt::GptRecord;
use serde::Deserialize;
use surrealdb::engine::remote::ws::{Client, Ws};
use surrealdb::opt::auth::Root;
use surrealdb::sql::{Thing, Value};
use surrealdb::Surreal;

#[derive(Debug, Deserialize)]
struct Record {
    #[allow(dead_code)]
    id: Thing,
}

pub async fn connect() -> Option<Surreal<Client>> {
    // Connect to the server
    match Surreal::new::<Ws>("127.0.0.1:8000").await {
        Ok(db) => {
            match db
                .signin(Root {
                    username: "user",
                    password: "root",
                })
                .await
            {
                Ok(_) => match db.use_ns("test").use_db("test").await {
                    Ok(_) => Some(db),
                    Err(e) => {
                        println!("Error setting namespace or database: {}", e);
                        None
                    }
                },
                Err(e) => {
                    println!("Error signing in: {}", e);
                    None
                }
            }
        }
        Err(e) => {
            println!("Error connecting to server: {}", e);
            None
        }
    }
}

pub async fn create_gpt(db: &Surreal<Client>, gpt: &GptRecord) -> surrealdb::Result<()> {
    let sql = "CREATE $id CONTENT $gpt;";
    let author: BTreeMap<String, Value> = [
        ("name".into(), gpt.author.name.clone().into()),
        ("url".into(), gpt.author.url.clone().into()),
    ]
    .into();
    let name: BTreeMap<String, Value> = [
        ("display".into(), gpt.name.display.clone().into()),
        ("sort".into(), gpt.name.sort.clone().into()),
    ]
    .into();
    let data: BTreeMap<String, Value> = [
        ("author".into(), author.into()),
        ("name".into(), name.into()),
        ("description".into(), gpt.description.clone().into()),
        ("tags".into(), gpt.tags.clone().into()),
        ("added".into(), gpt.added.clone().into()),
        ("updated".into(), gpt.updated.clone().into()),
        ("slug".into(), gpt.slug.clone().into()),
        ("image".into(), gpt.image.clone().into()),
    ]
    .into();

    let vars: BTreeMap<String, Value> = [
        ("id".into(), gpt.id.clone().into()),
        ("gpt".into(), data.into()),
    ]
    .into();

    db.query(sql).bind(vars).await?;

    Ok(())
}
