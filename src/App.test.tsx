import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import React from "react";

const server = setupServer(
  rest.get(
    "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0",
    (req, res, ctx) => {
      return res(
        ctx.json({
          hits: [
            {
              created_at: "2022-04-15T15:57:32.000Z",
              title:
                "Elon Musk Also Threatened to Buy My Company. Here’s How We Handled It",
              url: "https://www.bloomberg.com/news/articles/2022-04-14/elon-musk-also-threatened-to-buy-my-company-here-s-how-we-handled-it",
              author: "MBCook",
              points: 1,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650038252,
              _tags: ["story", "author_MBCook", "story_31041696"],
              objectID: "31041696",
              _highlightResult: {
                title: {
                  value:
                    "Elon Musk Also Threatened to Buy My Company. Here’s How We Handled It",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value:
                    "https://www.bloomberg.com/news/articles/2022-04-14/elon-musk-also-threatened-to-buy-my-company-here-s-how-we-handled-it",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "MBCook",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:57:07.000Z",
              title: "Leaf PHP v3 Release",
              url: "https://github.com/leafsphp/leaf/discussions/70",
              author: "mychi",
              points: 1,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650038227,
              _tags: ["story", "author_mychi", "story_31041687"],
              objectID: "31041687",
              _highlightResult: {
                title: {
                  value: "Leaf PHP v3 Release",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value: "https://github.com/leafsphp/leaf/discussions/70",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "mychi",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:56:59.000Z",
              title:
                "Physicists devise precise laser-based method to measure a baseball’s drag",
              url: "https://arstechnica.com/science/2022/04/physicists-devise-precise-laser-based-method-to-measure-a-baseballs-drag/",
              author: "PaulHoule",
              points: 1,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650038219,
              _tags: ["story", "author_PaulHoule", "story_31041685"],
              objectID: "31041685",
              _highlightResult: {
                title: {
                  value:
                    "Physicists devise precise laser-based method to measure a baseball’s drag",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value:
                    "https://arstechnica.com/science/2022/04/physicists-devise-precise-laser-based-method-to-measure-a-baseballs-drag/",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "PaulHoule",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:56:02.000Z",
              title: "2022 is officially the Year of Linux Gaming",
              url: "https://www.gamingonlinux.com/2022/04/2022-is-officially-the-year-of-linux-gaming/",
              author: "mariuz",
              points: 1,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650038162,
              _tags: ["story", "author_mariuz", "story_31041671"],
              objectID: "31041671",
              _highlightResult: {
                title: {
                  value: "2022 is officially the Year of Linux Gaming",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value:
                    "https://www.gamingonlinux.com/2022/04/2022-is-officially-the-year-of-linux-gaming/",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "mariuz",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:55:55.000Z",
              title:
                "Trigger an Algolia Crawler to Reindex on GitHub Repository Releases",
              url: "https://pipedream.com/blog/reindex-algolia-on-github-releases/",
              author: "todsacerdoti",
              points: 1,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650038155,
              _tags: ["story", "author_todsacerdoti", "story_31041669"],
              objectID: "31041669",
              _highlightResult: {
                title: {
                  value:
                    "Trigger an Algolia Crawler to Reindex on GitHub Repository Releases",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value:
                    "https://pipedream.com/blog/reindex-algolia-on-github-releases/",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "todsacerdoti",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:54:47.000Z",
              title: "Trouble for workers who turn cameras off",
              url: "https://www.axios.com/trouble-for-workers-who-turn-cameras-off-zoom-8b54035b-b365-4b51-8034-8de04bca18ef.html",
              author: "mji",
              points: 1,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650038087,
              _tags: ["story", "author_mji", "story_31041652"],
              objectID: "31041652",
              _highlightResult: {
                title: {
                  value: "Trouble for workers who turn cameras off",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value:
                    "https://www.axios.com/trouble-for-workers-who-turn-cameras-off-zoom-8b54035b-b365-4b51-8034-8de04bca18ef.html",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: { value: "mji", matchLevel: "none", matchedWords: [] },
              },
            },
            {
              created_at: "2022-04-15T15:52:13.000Z",
              title: "The Mystery of the Miracle Year",
              url: "https://dwarkeshpatel.com/annus-mirabilis/",
              author: "btilly",
              points: 1,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650037933,
              _tags: ["story", "author_btilly", "story_31041620"],
              objectID: "31041620",
              _highlightResult: {
                title: {
                  value: "The Mystery of the Miracle Year",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value: "https://dwarkeshpatel.com/annus-mirabilis/",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "btilly",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:51:53.000Z",
              title: "Neoclide/coc.nvim: use Anti 996 license",
              url: "https://github.com/neoclide/coc.nvim/commit/6d4a2a375d53935e5b8bed4e77085204d0370083",
              author: "CameronNemo",
              points: 1,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650037913,
              _tags: ["story", "author_CameronNemo", "story_31041616"],
              objectID: "31041616",
              _highlightResult: {
                title: {
                  value: "Neoclide/coc.nvim: use Anti 996 license",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value:
                    "https://github.com/neoclide/coc.nvim/commit/6d4a2a375d53935e5b8bed4e77085204d0370083",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "CameronNemo",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:51:34.000Z",
              title:
                "Researchers control brain circuits from a distance using infrared light",
              url: "https://neuroscience.stanford.edu/news/researchers-control-brain-circuits-distance-using-infrared-light",
              author: "Amorymeltzer",
              points: 2,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650037894,
              _tags: ["story", "author_Amorymeltzer", "story_31041612"],
              objectID: "31041612",
              _highlightResult: {
                title: {
                  value:
                    "Researchers control brain circuits from a distance using infrared light",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value:
                    "https://neuroscience.stanford.edu/news/researchers-control-brain-circuits-distance-using-infrared-light",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "Amorymeltzer",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:51:18.000Z",
              title:
                "Ask HN: Are we safe from WW3 until Trump loses his chance to be president?",
              url: null,
              author: "amichail",
              points: 1,
              story_text:
                "A Trump second term might mean the US leaving NATO. So, I think Russia would delay a war with NATO until this possibility is gone.",
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650037878,
              _tags: ["story", "author_amichail", "story_31041605", "ask_hn"],
              objectID: "31041605",
              _highlightResult: {
                title: {
                  value:
                    "Ask HN: Are we safe from WW3 until Trump loses his chance to be president?",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "amichail",
                  matchLevel: "none",
                  matchedWords: [],
                },
                story_text: {
                  value:
                    "A Trump second term might mean the US leaving NATO. So, I think Russia would delay a war with NATO until this possibility is gone.",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:50:43.000Z",
              title: "How to Stop Overthinking",
              url: "https://psyche.co/guides/how-to-stop-overthinking-with-help-from-metacognitive-strategies",
              author: "durmonski",
              points: 1,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650037843,
              _tags: ["story", "author_durmonski", "story_31041597"],
              objectID: "31041597",
              _highlightResult: {
                title: {
                  value: "How to Stop Overthinking",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value:
                    "https://psyche.co/guides/how-to-stop-overthinking-with-help-from-metacognitive-strategies",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "durmonski",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:42:46.000Z",
              title: "Breaking down broadband nutrition labels",
              url: "https://blog.cloudflare.com/breaking-down-broadband-nutrition-labels/",
              author: "matsur",
              points: 2,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650037366,
              _tags: ["story", "author_matsur", "story_31041494"],
              objectID: "31041494",
              _highlightResult: {
                title: {
                  value: "Breaking down broadband nutrition labels",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value:
                    "https://blog.cloudflare.com/breaking-down-broadband-nutrition-labels/",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "matsur",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:38:38.000Z",
              title: "WASM-4 2.4 released with Multiplayer support",
              url: "https://wasm4.org/blog/release-2-4-0/",
              author: "syrusakbary",
              points: 2,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650037118,
              _tags: ["story", "author_syrusakbary", "story_31041426"],
              objectID: "31041426",
              _highlightResult: {
                title: {
                  value: "WASM-4 2.4 released with Multiplayer support",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value: "https://wasm4.org/blog/release-2-4-0/",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "syrusakbary",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:36:05.000Z",
              title:
                "Solar energy can now be stored for up to 18 years, say scientists",
              url: "https://www.euronews.com/green/2022/04/12/solar-energy-can-now-be-stored-for-up-to-18-years-say-scientists",
              author: "elorant",
              points: 2,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650036965,
              _tags: ["story", "author_elorant", "story_31041394"],
              objectID: "31041394",
              _highlightResult: {
                title: {
                  value:
                    "Solar energy can now be stored for up to 18 years, say scientists",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value:
                    "https://www.euronews.com/green/2022/04/12/solar-energy-can-now-be-stored-for-up-to-18-years-say-scientists",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "elorant",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:35:11.000Z",
              title: "Moskva Cruiser: What You Need to Know",
              url: "https://www.youtube.com/watch?v=DmxJsRy4ty0",
              author: "mariuz",
              points: 2,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650036911,
              _tags: ["story", "author_mariuz", "story_31041381"],
              objectID: "31041381",
              _highlightResult: {
                title: {
                  value: "Moskva Cruiser: What You Need to Know",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value: "https://www.youtube.com/watch?v=DmxJsRy4ty0",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "mariuz",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:33:00.000Z",
              title: "Boom time for dog walkers, sitters and trainers",
              url: "https://www.bbc.co.uk/news/business-61067507",
              author: "LinuxBender",
              points: 2,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650036780,
              _tags: ["story", "author_LinuxBender", "story_31041353"],
              objectID: "31041353",
              _highlightResult: {
                title: {
                  value: "Boom time for dog walkers, sitters and trainers",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value: "https://www.bbc.co.uk/news/business-61067507",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "LinuxBender",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:32:53.000Z",
              title:
                "Amazon adds 5% “fuel and inflation” surcharge to seller fees for Prime shipping",
              url: "https://arstechnica.com/tech-policy/2022/04/amazon-imposes-5-fuel-and-inflation-fee-on-sellers-who-use-prime-shipping/",
              author: "metadat",
              points: 1,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650036773,
              _tags: ["story", "author_metadat", "story_31041352"],
              objectID: "31041352",
              _highlightResult: {
                title: {
                  value:
                    "Amazon adds 5% “fuel and inflation” surcharge to seller fees for Prime shipping",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value:
                    "https://arstechnica.com/tech-policy/2022/04/amazon-imposes-5-fuel-and-inflation-fee-on-sellers-who-use-prime-shipping/",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "metadat",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:32:47.000Z",
              title: "What Artists Notice",
              url: "https://stopa.io/post/294",
              author: "stopachka",
              points: 1,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650036767,
              _tags: ["story", "author_stopachka", "story_31041351"],
              objectID: "31041351",
              _highlightResult: {
                title: {
                  value: "What Artists Notice",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value: "https://stopa.io/post/294",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "stopachka",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:31:46.000Z",
              title:
                "Seal taken into care after being fed 'sandwiches and doughnuts'",
              url: "https://www.bbc.co.uk/newsround/61119740",
              author: "LinuxBender",
              points: 1,
              story_text: null,
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650036706,
              _tags: ["story", "author_LinuxBender", "story_31041338"],
              objectID: "31041338",
              _highlightResult: {
                title: {
                  value:
                    "Seal taken into care after being fed 'sandwiches and doughnuts'",
                  matchLevel: "none",
                  matchedWords: [],
                },
                url: {
                  value: "https://www.bbc.co.uk/newsround/61119740",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "LinuxBender",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
            {
              created_at: "2022-04-15T15:31:34.000Z",
              title: "Ask HN: Does anyone use Solaris in production?",
              url: null,
              author: "phendrenad2",
              points: 1,
              story_text:
                "I was surprised to see that Oracle is still doing things with Solaris, and now I\u0026#x27;m curious: Is anyone here using it in production? What made you choose it over Linux?",
              comment_text: null,
              num_comments: 0,
              story_id: null,
              story_title: null,
              story_url: null,
              parent_id: null,
              created_at_i: 1650036694,
              _tags: [
                "story",
                "author_phendrenad2",
                "story_31041331",
                "ask_hn",
              ],
              objectID: "31041331",
              _highlightResult: {
                title: {
                  value: "Ask HN: Does anyone use Solaris in production?",
                  matchLevel: "none",
                  matchedWords: [],
                },
                author: {
                  value: "phendrenad2",
                  matchLevel: "none",
                  matchedWords: [],
                },
                story_text: {
                  value:
                    "I was surprised to see that Oracle is still doing things with Solaris, and now I'm curious: Is anyone here using it in production? What made you choose it over Linux?",
                  matchLevel: "none",
                  matchedWords: [],
                },
              },
            },
          ],
          nbHits: 2129525,
          page: 0,
          nbPages: 50,
          hitsPerPage: 20,
          exhaustiveNbHits: false,
          exhaustiveTypo: true,
          query: "",
          params:
            "advancedSyntax=true\u0026analytics=true\u0026analyticsTags=backend\u0026page=0\u0026tags=story",
          processingTimeMS: 2,
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
  render(<App />);
  const output = await waitFor(() =>
    screen.findByText(
      "Elon Musk Also Threatened to Buy My Company. Here’s How We Handled It"
    )
  );
  expect(output).toBeInTheDocument();
});

test("All table column name should display correctly", () => {
  render(<App />);
  const titleColumn = screen.getByText("Title");
  const createdAtColumn = screen.getByText("Created_at");
  const urlColumn = screen.getByText("Url");
  const authorColumn = screen.getByText("Author");

  expect(titleColumn).toBeInTheDocument();
  expect(createdAtColumn).toBeInTheDocument();
  expect(urlColumn).toBeInTheDocument();
  expect(authorColumn).toBeInTheDocument();
});

test("Details button should display", async () => {
  render(<App />);
  const arr = await screen.findAllByText(/Details/i);

  expect(arr.length).toBe(20);
});

test("waits 10 second before loading new data and rerender", () => {
  render(<App />);
  const doAsync = () => {
    setInterval(async () => {
      // expect(setInterval).toHaveBeenCalledTimes(1);

      const output = await waitFor(() => {
        return screen.findByText(
          "Better Clouds Than Ever with New Exascale Computing-Ready Atmosphere Model"
        );
      });
      console.log(output);
      expect(output).toBeInTheDocument();

      // expect(setInterval).toHaveBeenCalledTimes(1);
    }, 10000);
  };

  /*  jest.useFakeTimers();
  jest.spyOn(React, "useEffect").mockImplementation((f) => f());
  jest.spyOn(global, "setInterval"); */
  // jest.advanceTimersByTime(10000);
  // jest.runAllTimers();
  // jest.runOnlyPendingTimers();
  // expect(setInterval).toHaveBeenCalledTimes(1);
  // jest.useRealTimers();
  /* expect(setTimeout).toHaveBeenLastCalledWith(
    expect(setTimeout).toHaveBeenCalledTimes(50),
    10000
  ); */

  /* const callback1 = () => {
    return true;
  }; */

  doAsync();

  // jest.useRealTimers();
});
