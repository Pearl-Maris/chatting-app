import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Friend from "./pages/Friend";
import ChattingList from "./pages/ChattingList";
import ChattingRoom from "./pages/ChattingRoom";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} /> {/* Login */}
      <Route path="/friend" element={<Friend />} /> {/* Friend */}
      <Route path="/room" element={<ChattingList />} /> {/* ChattingList */}
      <Route path="/room/:roomId" element={<ChattingRoom />} /> {/* ChattingRoom */}
      <Route path="/mypage" element={<MyPage />} /> {/* MyPage */}
    </Routes>
  );
}

export default App;
