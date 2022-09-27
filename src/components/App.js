import React, { useEffect, useState, createContext } from "react";
import Header from "./Header";
import RowWrapper from "./RowWrapper";

const CheckCount = createContext(null);
const selItemsArr = [];

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState({ selCount: 0, isSel: false });
  const obj = {};

  const fetchAll = async () => {
    try {
      const [res1, res2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/albums"),
        fetch("https://jsonplaceholder.typicode.com/posts "),
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();

      setAlbums(data1);
      setPosts(data2);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  albums.forEach((item) => (obj[item.id] = item));

  const details = posts.map((item) => {
    return {
      id: obj[item.id].id,
      userId: obj[item.id].userId,
      title: obj[item.id].title,
      body: item.body,
    };
  });

  const selItems = (item) => {
    selItemsArr.push(item);
  };

  return (
    <>
      <Header input={input} setInput={setInput} setSelect={setSelect} />
      <div className="details-container">
        <CheckCount.Provider
          value={{ count, setCount, select, setSelect, selItems, selItemsArr }}
        >
          {details.map((item) => {
            return (
              <RowWrapper
                key={item.id}
                id={item.id}
                title={item.title.slice(0, 25)}
                userId={item.userId}
                body={item.body}
              />
            );
          })}
        </CheckCount.Provider>
      </div>
    </>
  );
};

export default App;
export { CheckCount };
