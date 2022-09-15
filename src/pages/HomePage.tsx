import {
  MainContainer,
  CardLayout,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
  RatingTag,
  LayoutContainer,
  SuperhostTag,
} from "@/styled-components";

import { Typography } from "@/components";

import db from "@/db/stays.json";

const HomePage = () => {
  const stays = db.filter((el, i) => i < 6 && el);

  return (
    <MainContainer>
      <nav>
        <h1>Navbar</h1>
      </nav>

      <Typography component="h2" text="Stays in Finland" />

      <CardLayout>
        {stays.map((stay) => (
          <CardContainer key={stay.id}>
            <CardImage src={stay.photo} />

            <LayoutContainer padding="2.1rem 1rem">
              <LayoutContainer display="flex" justify="space-between" align="center">
                {stay.superHost && typeof stay.beds === "number" && (
                  <SuperhostTag>
                    <span>Super Host</span>
                  </SuperhostTag>
                )}
                <CardDescription>
                  {stay.type}{" "}
                  {stay.superHost && typeof stay.beds === "number" && (
                    <>
                      <span>. {stay.beds} beds</span>
                    </>
                  )}
                </CardDescription>
                <RatingTag>
                  <span className="material-icons">star</span>
                  {stay.rating}
                </RatingTag>
              </LayoutContainer>

              <CardTitle>{stay.title}</CardTitle>
            </LayoutContainer>
          </CardContainer>
        ))}
      </CardLayout>

      <footer>
        <h2>Footer</h2>
      </footer>
    </MainContainer>
  );
};

export default HomePage;
