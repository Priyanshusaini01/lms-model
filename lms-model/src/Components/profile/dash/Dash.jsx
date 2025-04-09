import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile";
import Class from "../../../pages/ClassRoom/Class";
import PublicProfile from "../PublicProfile";
import Photo from "../Photo";

function Dash () {
    const [isSidebar, setIsSidebar] = useState(true);

  return (
<div className="app">
          <Profile isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/class/:user" element={<Class />} />
              <Route path="/public" element={<PublicProfile />} />
              <Route path="/photo" element={<Photo />} />
              <Route path="/account" element={<AccountSecurity />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
  )
}

export default Dash
