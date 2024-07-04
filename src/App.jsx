import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FormBuilder from "./FormBuilder";

import ShareableForm from "./ShareableForm";

function App() {
  return (
    <div className="dark:bg-dark-body-blue">
      <Router>
        <Routes>
          <Route name="formBuildDashboard" path="/" element={<FormBuilder />} />
          <Route
            name="formShareDashboard"
            path="/forms/:id"
            element={<ShareableForm />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
