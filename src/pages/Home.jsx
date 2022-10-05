import { useState, useEffect } from "react";
import getData from "../services/sacraping";

import {
  CheckIcon,
  Container,
  ContentContainer,
  ContentWrapper,
  GitHubIcon,
  GitStatusContainer,
  Header,
  HeaderStatusOperational,
  HeaderStatusInoperational,
  IconWrapper,
  InoperationalIcon,
  OperationalIcon,
  StatusGrid,
  StatusItem,
  Text,
  TextStatus,
  Title,
  AttentionIcon,
} from "./styles";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getResponse = async () => {
      const response = await getData();
      setData(response);
    };
    getResponse();
  }, []);

 

  return (
    <Container className="App">
      <Header>
        <GitHubIcon />
      </Header>
      <ContentContainer>
        <ContentWrapper>
          {
            (data.Git_Operations,
            data.API_Requests,
            data.Webhooks,
            data.Issues,
            data.Pull_Requests,
            data.Actions,
            data.Packages,
            data.Pages,
            data.Codespaces,
            data.Copilot != "Operational" ? (
              <HeaderStatusInoperational>
                <AttentionIcon />{" "}
                <Text>Some Systems could be Inoperational</Text>
              </HeaderStatusInoperational>
            ) : (
              <HeaderStatusOperational>
                <CheckIcon /> <Text>All Systems Operational</Text>
              </HeaderStatusOperational>
            ))
          }
          <GitStatusContainer>
            <Title>Current Status</Title>

            <StatusGrid>
              <StatusItem>
                <TextStatus>Git Operations</TextStatus>
                <IconWrapper
                  data-tip={data.Git_Operations}
                  operational={data.Git_Operations}
                >
                  {data.Git_Operations === "Operational" ? (
                    <OperationalIcon />
                  ) : (
                    <InoperationalIcon />
                  )}
                </IconWrapper>
              </StatusItem>
              <StatusItem>
                <TextStatus>API Requests</TextStatus>
                <IconWrapper
                  data-tip={data.API_Requests}
                  operational={data.API_Requests}
                >
                  {data.API_Requests === "Operational" ? (
                    <OperationalIcon />
                  ) : (
                    <InoperationalIcon />
                  )}
                </IconWrapper>
              </StatusItem>
              <StatusItem>
                <TextStatus>Webhooks</TextStatus>
                <IconWrapper
                  data-tip={data.Webhooks}
                  operational={data.Webhooks}
                >
                  {data.Webhooks === "Operational" ? (
                    <OperationalIcon />
                  ) : (
                    <InoperationalIcon />
                  )}
                </IconWrapper>
              </StatusItem>
              <StatusItem>
                <TextStatus>Issues</TextStatus>

                <IconWrapper data-tip={data.Issues} operational={data.Issues}>
                  {data.Issues === "Operational" ? (
                    <OperationalIcon />
                  ) : (
                    <InoperationalIcon />
                  )}
                </IconWrapper>
              </StatusItem>
              <StatusItem>
                <TextStatus>Pull Requests</TextStatus>

                <IconWrapper
                  data-tip={data.Pull_Requests}
                  operational={data.Pull_Requests}
                >
                  {data.Pull_Requests === "Operational" ? (
                    <OperationalIcon />
                  ) : (
                    <InoperationalIcon />
                  )}
                </IconWrapper>
              </StatusItem>
              <StatusItem>
                <TextStatus>Actions</TextStatus>
                <IconWrapper data-tip={data.Actions} operational={data.Actions}>
                  {data.Actions === "Operational" ? (
                    <OperationalIcon />
                  ) : (
                    <InoperationalIcon />
                  )}
                </IconWrapper>
              </StatusItem>
              <StatusItem>
                <TextStatus>Packages</TextStatus>

                <IconWrapper
                  data-tip={data.Packages}
                  operational={data.Packages}
                >
                  {data.Packages === "Operational" ? (
                    <OperationalIcon />
                  ) : (
                    <InoperationalIcon />
                  )}
                </IconWrapper>
              </StatusItem>
              <StatusItem>
                <TextStatus>Pages</TextStatus>

                <IconWrapper data-tip={data.Pages} operational={data.Pages}>
                  {data.Pages === "Operational" ? (
                    <OperationalIcon />
                  ) : (
                    <InoperationalIcon />
                  )}
                </IconWrapper>
              </StatusItem>
              <StatusItem>
                <TextStatus>Codespaces</TextStatus>

                <IconWrapper
                  data-tip={data.Codespaces}
                  operational={data.Codespaces}
                >
                  {data.Codespaces === "Operational" ? (
                    <OperationalIcon />
                  ) : (
                    <InoperationalIcon />
                  )}
                </IconWrapper>
              </StatusItem>
              <StatusItem>
                <TextStatus>Copilot</TextStatus>

                <IconWrapper
                  data-tip={data.API_Requests}
                  operational={data.Copilot}
                >
                  {data.Copilot === "Operational" ? (
                    <OperationalIcon />
                  ) : (
                    <InoperationalIcon />
                  )}
                </IconWrapper>
              </StatusItem>
            </StatusGrid>
          </GitStatusContainer>
        </ContentWrapper>
      </ContentContainer>
    </Container>
  );
}

export default Home;
