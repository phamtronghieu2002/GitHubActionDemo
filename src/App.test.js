import { render, screen } from "@testing-library/react";
import App from "./App";
import { Authprovider } from "./providers/Authprovider";
import { Chatprovider } from "./providers/Chatprovider";
import { Inputprovider } from "./providers/Inputprovider";
import { ResponsiveProvider } from "./providers/Responsiveprovider";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";

test("renders learn react link", () => {
  render(
  
<Authprovider>
    <Chatprovider>
      <Inputprovider>
        <ResponsiveProvider>
          <GlobalStyles>
            <Router basename={process.env.PUBLIC_URL}>
              <App />
            </Router>
          </GlobalStyles>
        </ResponsiveProvider>
      </Inputprovider>
    </Chatprovider>
  </Authprovider>
  );

});
