import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import { Button } from "reactstrap";

export default function CharContain() {
  const [chars, setChars] = useState([]);
  const [url, setUrl] = useState(`https://swapi.co/api/people`);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then(
        res => {
          setChars(res.data)
          setLoading(false)
        }
      )
      .catch(err => console.log(err));
  }, [url]);

  console.log(chars);
  return (
    <>
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
            <div>
              <Button
                id="butt"
                size="sm"
                className={chars.previous ? "active" : "notActive"}
                disabled={!chars.previous}
                onClick={() => {
                  setUrl(chars.previous)
                  setLoading(true)
                }}
              >
                previous
              </Button>

              <Button
                id="butt"
                size="sm"
                disabled={!chars.next}
                className={chars.next ? "active" : "notActive"}
                onClick={() => {
                  setUrl(chars.next)
                  setLoading(true)
                }}
              >
                next
              </Button>

              {chars.results.map(char => (
                <div className="card">
                  <h1>Name:{char.name}</h1>
                  <p>height:{char.height}</p>
                  <p>mass:{char.mass}</p>
                </div>
              ))}
            </div>
          )}
      </div>
    </>
  );
}
