import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import { Button } from "reactstrap";

export default function CharContain() {
  const [content, setContent] = useState([]);
  const [url, setUrl] = useState(`https://swapi.co/api/people`);
  const [loading, setLoading] = useState(true);
  const [char, setChar] = useState(false)

  const setCharUrl = (charUrl) => {
    setLoading(true);
    setChar(true);
    setUrl(charUrl);
  }

  const setMainUrl = (mainUrl) => {
    setLoading(true);
    setChar(false);
    setUrl(mainUrl);
  }

  useEffect(() => {
    axios
      .get(url)
      .then(
        res => (
          setContent(res.data),
          setLoading(false)
        )
      )
      .catch(err => console.log(err));
  }, [url]);

  console.log(content);
  return (
    <>
      <div className="container">
        {loading ? (
          <Loading />
        ) : char ? (
          <div>

            <Button
              id="butt"
              size="sm"
              onClick={() => {
                setUrl(`https://swapi.co/api/people`)
                setChar(false)
              }}
            >
              Back to mainPage
            </Button>


            <div className="card">
              <h1> Name: {content.name}</h1>
              <p>Height: {content.height}</p>
              <p>Mass: {content.mass}</p>
              <p>Hair color: {content.hair_color}</p>
              <p>Skin color: {content.skin_color}</p>
              <p>Eye color: {content.eye_color}</p>
              <p>Birth year: {content.birth_year}</p>

            </div>

          </div>
        ) : (
              <div>
                <Button
                  id="butt"
                  size="sm"
                  className={content.previous ? "active" : "notActive"}
                  disabled={!content.previous}
                  onClick={() => {
                    setLoading(true);
                    setUrl(content.previous);
                  }}
                >
                  previous
            </Button>

                <Button
                  id="butt"
                  size="m"
                  disabled={!content.next}
                  className={content.next ? "active" : "notActive"}
                  onClick={() => {
                    setLoading(true);
                    setUrl(content.next);
                  }}
                >
                  next
            </Button>

                {content.results.map(char => (
                  <div className="card">
                    <h1>Name: {char.name}</h1>
                    <p>Height: {char.height}</p>
                    <p>Birth year: {char.birth_year}</p>
                    <Button
                      id="butt"
                      size="lg"
                      block
                      onClick={() => {
                        setLoading(true);
                        setChar(true);
                        setUrl(content.next);
                      }}
                    >
                      more info
                  </Button>
                  </div>
                ))}
              </div>
            )}
      </div>
    </>
  );
}
