use std::collections::BTreeMap;

use crate::gpt::GptRecord;
use tokio_postgres::tls::MakeTlsConnect;
use tokio_postgres::{Client, Error};

pub async fn connect() -> Result<Client, Error> {
    // TLS connection.
    let tls = MakeTlsConnect.make_();
    // Connect to the database.
    let (client, connection) = tokio_postgres::connect("user=k8603427 password=4HaLxXKrl1cI host='ep-still-union-32116685.eu-central-1.aws.neon.tech' dbname=gpts sslmode=require", TlsConnector).await?;

    // The connection object performs the actual communication with the database,
    // so spawn it off to run on its own.
    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("connection error: {}", e);
        }
    });

    dbg!("Connected to database");
    dbg!(&client);

    Ok(client)
}

pub async fn create_gpt(client: &Client, gpt: &GptRecord) -> Result<(), Error> {
    let sql = "INSERT INTO gpt_entries (id, author, name, description, tags, added, updated, slug, image) VALUES ('$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', $9); ";

    let unserialized_author: BTreeMap<String, String> = [
        ("name".into(), gpt.author.name.clone().into()),
        ("url".into(), gpt.author.url.clone().into()),
    ]
    .into();

    let author = serde_json::to_string(&unserialized_author).unwrap();

    let unserialized_name: BTreeMap<String, String> = [
        ("display".into(), gpt.name.display.clone().into()),
        ("sort".into(), gpt.name.sort.clone().into()),
    ]
    .into();

    let name = serde_json::to_string(&unserialized_name).unwrap();

    client
        .query(
            sql,
            &[
                &gpt.id,
                &author,
                &name,
                &gpt.description,
                &gpt.tags.join(","),
                &gpt.added,
                &gpt.updated,
                &gpt.slug,
                &gpt.image,
            ],
        )
        .await?;

    Ok(())
}
