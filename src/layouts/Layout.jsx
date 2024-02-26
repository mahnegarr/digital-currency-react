import React from "react";
import "/src/layouts/Layout.module.css"

function layout({children}) {
  return <>
    <header>
      <h1>Crypto App</h1>
      <p><a href="https://github.com/mahnegarr?tab=overview&from=2024-02-01&to=2024-02">My Github</a></p>
    </header>
    {children}
    <footer>
        <p>Developed by Mahnegar with ❤️ </p>
    </footer>
  </>
  
}

export default layout;
