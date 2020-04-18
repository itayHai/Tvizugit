import {
  Gavel,
  Person,
  LockOpen,
  RoomService,
  Eco,
  Accessible,
  Receipt,
  Accessibility,
  Work,
  MonetizationOn,
  AccountBalance,
} from "@material-ui/icons/";
import React from "react";

export const URL = "http://localhost:8000/graphql";

export const users = [
  { id: 1, name: "עורך דין", icon: <Gavel/> },
  { id: 2, name: "משתמש", icon: <Person/> },
];
export const categories = [
  { id: 1, name: "חוק הגנת הצרכן", icon: <Accessibility /> },
  { id: 2, name: "ביטוח", icon: <LockOpen /> },
  { id: 3, name: "בנקאות", icon: <AccountBalance /> },
  { id: 4, name: "חוק ההגבלים העסקיים", icon: <Receipt /> },
  { id: 6, name: "מפגע סביבתי", icon: <Eco /> },
  { id: 7, name: "אפליה בשירות", icon: <RoomService /> },
  { id: 8, name: "אפליה בעבודה ושכר", icon: <Work /> },
  { id: 9, name: "נגישות", icon: <Accessible /> },
  { id: 11, name: "גבייה שלא כדין", icon: <MonetizationOn /> },
];

export const categoriesIcons = {
  "חוק הגנת הצרכן": <Accessibility />,
  ביטוח: <LockOpen />,
  בנקאות: <AccountBalance />,
  "חוק ההגבלים העסקיים": <Receipt />,
  "מפגע סביבתי": <Eco />,
  "אפליה בשירות": <RoomService />,
  "אפליה בעבודה ושכר": <Work />,
  נגישות: <Accessible />,
  "גבייה שלא כדין": <MonetizationOn />,
};

export const propertiesToShow = [
  {
    name: "classAction",
    classActionPro: [
      {
        value: "שם התביעה",
        key: "actionName",
      },
      {
        value: "הגוף הנתבע",
        key: "defendantParty",
      },
      {
        value: "שלב התביעה",
        key: "actionStage",
      },
      {
        value: "מספר תובעים",
        key: "numberOfProsecutors",
      },
    ],
  },
  {
    name: "lawyers",
    lawyerProp: [
      {
        value: "מספר תיקים",
        key: "numberOfCases",
      },
      {},
    ],
  },
];

export const dummyData = [
  {
    Id: "1",
    actionName: "אתביעת המאה",
    startDate: "15/04/2020",
    manUser: "עידו פרלמן",
    manMessages: [
      {
        Id: 1,
        date: "11/11/2018",
        title: "הודעה ראשונה",
        content:
          "זה תוכן ההודעה הראשונה והשנייה לא תהיה שונה מאוד מזאת, תתכוננו",
      },
      {
        Id: 2,
        date: "11/11/2018",
        title: "הודעה שנייה",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut dhfhyjy fhfd sdfg dg dfhg  dhfghfdgh gfdsgf sdfgsdg sd sd sdhghgh d enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut dhfhyjy fhfd sdfg dg dfhg  dhfghfdgh gfdsgf sdfgsdg sd sd sdhghgh d enim ad minim veniam, quis nostrud ",
      users:[{
        Id:1,
        name:"איתי הייזלר"        
      }],
    defendantParty: "שטראוס1",
    actionStage: "תוך כדי משפט",
    numberOfProsecutors: 10000,
    chance: "25%",
  },
  {
    Id: "2",
    actionName: " 222222בתביעת המאה",
      managerUser:{
        Id:2,
        name:"אלה פורטנוב"        
      },
    startDate: "15/04/2020",
    manUser: "עידו פרלמן",
    description:
      "כאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבהכאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבה אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122 .כאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבה אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122. אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122",
    defendantParty: "פייסבוק",
    actionStage: "לפני משפט",
    numberOfProsecutors: 2000,
    chance: "50%",
  },
];
  export const dummyUser = {
    Id:1,
    name:"איתי הייזלר"
  }
