import request from "supertest";

import { app } from "../../app";

const subject = () => request(app.callback()).get("/works");

describe("/works", () => {
  test("returns work content", async () => {
    const { body, status } = await subject();
    expect(status).toBe(200);
    expect(body).toHaveLength(10);

    expect(body[0]).toMatchInlineSnapshot(`
      {
        "achievements": [
          {
            "description": "Currently contributing to GraphQL APIs and NestJS/React applications",
          },
          {
            "description": "Moved across most of the engineering teams in the organization, started in the front-end, client-facing one, migrated to the back-end, core API team to finally end up building and being tech lead / scrum master on the first feature-based, cross-stack team",
          },
          {
            "description": "Focus on consistency, automation and scalability in our fast growing team",
            "highlights": [
              "As a strong proponent of switching our code base from JS to TypeScript, I wrote the first TS library in the organization and migrated ~25%+ of the codebase to TS",
              "Migrated our unit tests from Mocha/Chai to Jest for consistency across front and back-end teams. Strongly enforcing unit testing any new contributions",
              "Significantly increased and enforced our linting rules and set up automated linter execution on CI, increasing scalability and fluency across teams",
            ],
          },
          {
            "description": "Designed and rewrote our vehicle inventories’ ingestion flow from poll-based to pushed-based, transitioning from a twice-a-day synchronization of our database to an on-demand one",
          },
          {
            "description": "Implemented automatic versioning through CI/CD on all our libraries saving hours of conflict merging on our pull requests due to conflicting manual version editing",
          },
          {
            "description": "Designed and created our “vendor APIs” client library, offering a single consistent request API and response envelope for all our external API call needs",
          },
        ],
        "company": "AutoFi",
        "dateIn": {
          "_nanoseconds": 0,
          "_seconds": 1554076800,
        },
        "description": "AutoFi is an e-commerce software platform that moves the point of sales to wherever consumers prefer to shop for and buy vehicles.",
        "image": "autofi.png",
        "place": "San Francisco",
        "title": "Senior/lead full-stack",
        "website": "https://www.autofi.com/",
      }
    `);
  });
});
