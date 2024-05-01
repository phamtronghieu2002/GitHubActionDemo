import { render, screen } from "@testing-library/react";
import App from "./App";
import { Authprovider } from "./providers/Authprovider";
import { Chatprovider } from "./providers/Chatprovider";
import { Inputprovider } from "./providers/Inputprovider";
import { ResponsiveProvider } from "./providers/Responsiveprovider";
import GlobalStyles from "./components/GlobalStyles";

test("renders learn react link", () => {
  render(
  
    <Authprovider>
      <Chatprovider>
        <Inputprovider>
          <ResponsiveProvider>
            <GlobalStyles>
              <App />
            </GlobalStyles>
          </ResponsiveProvider>
        </Inputprovider>
      </Chatprovider>
    </Authprovider>
  );

});
