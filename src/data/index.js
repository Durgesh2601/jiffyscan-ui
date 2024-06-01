import placeholder1 from "../assets/placeholder1.svg";
import placeholder2 from "../assets/placeholder2.svg";
import placeholder3 from "../assets/placeholder3.svg";
import placeholder4 from "../assets/placeholder4.svg";
export const data = [
  {
    id: 1,
    name: "Design Earn’s Talent Leaderboard",
    organizer: "Superteam",
    logo: placeholder1,
    token: {
      value: "700",
      currency: "USDC",
    },
    placement: "1st Place",
    filters: [
      "Design",
      "Frontend",
      "Backend",
      "Fullstack",
      "Blockchain",
      "Content",
    ],
    participants: 36,
    organized_date: "04/04/2023",
  },
  {
    id: 2,
    name: "Armada UI/UX Review",
    organizer: "Dean’s List Dao",
    logo: placeholder2,
    token: {
      value: null,
      currency: null,
    },
    placement: null,
    filters: ["Design"],
    participants: 7,
    organized_date: "21/03/2023",
  },
  {
    id: 3,
    name: "Create a Frame for Farcaster",
    organizer: "Deribet",
    logo: placeholder3,
    token: {
      value: "500",
      currency: "USDC",
    },
    placement: "1st Place",
    filters: ["Frontend", "Backend", "Blockchain"],
    participants: 20,
    organized_date: "14/03/2023",
  },
  {
    id: 4,
    name: "Write a thread with memes for PP Program on Solana",
    organizer: "pSTAKE Finance",
    logo: placeholder4,
    token: {
      value: "100",
      currency: "USDC",
    },
    placement: "3rd Place",
    filters: ["Content"],
    participants: 12,
    organized_date: "06/03/2023",
  },
];
