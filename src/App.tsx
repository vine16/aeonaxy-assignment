import React from "react";
import "./styles.css";
import Noti from "./components/Noti.tsx";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import NewStoryForm from "./components/NewStoryForm.tsx";
import StoryFormOpen from "./contexts/StoryFormOpen.tsx";
import GrayOverlay from "./components/GrayOverlay.tsx";
function App() {
  return (
    <StoryFormOpen>
      <GrayOverlay />
      <>
        <Noti />
        <Header />
        <Main />
        <NewStoryForm />
      </>
    </StoryFormOpen>
  );
}

export default App;
