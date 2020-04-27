import { LockOpen, RoomService, Eco, Accessible, Receipt, Accessibility, Work, MonetizationOn, AccountBalance, Gavel, Person } from "@material-ui/icons/";
import React from "react";

export const URL = "http://localhost:8000/graphql";

export const users = [
  { id: 1, name: "עורך דין", icon: <Gavel /> },
  { id: 2, name: "משתמש", icon: <Person /> },
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
        name: "שם התביעה",
        engName: "actionName",
      },
      {
        name: "הגוף הנתבע",
        engName: "defendantParty",
      },
      {
        name: "שלב התביעה",
        engName: "actionStage",
      },
      {
        name: "מספר תובעים",
        engName: "numberOfProsecutors",
      },
      {
        name: "קטגוריה",
        engName: "category",
      },
    ],
  },
  {
    name: "lawyers",
    lawyerProp: [
      {
        name: "מספר תיקים",
        engName: "numberOfCases",
      },
      {},
    ],
  },
];

export const dummyData = [
  {
    Id: 1,
    actionName: "אתביעת המאה",
    category: "ביטוח",
    startDate: "15/04/2020",
    manMessages: [{
      
      Id: 1,
      date: "11/11/2018",
      title: "הודעה ראשונה",
      content: "זה תוכן ההודעה הראשונה והשנייה לא תהיה שונה מאוד מזאת, תתכוננו"
    }, 
    {
      Id: 2,
      date: "11/11/2018",
      title: "הודעה שנייה",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut dhfhyjy fhfd sdfg dg dfhg  dhfghfdgh gfdsgf sdfgsdg sd sd sdhghgh d enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut dhfhyjy fhfd sdfg dg dfhg  dhfghfdgh gfdsgf sdfgsdg sd sd sdhghgh d enim ad minim veniam, quis nostrud "
    }],
    users: [{
      Id: 1,
      name: "איתי הייזלר"
    },
    {
      Id: 4,
      name: "עידו פרלמן"
    }],
    managerUser: {
      Id: 4,
      name: "עידו פרלמן"
    },
    description: "כאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבהכאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבה אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122 .כאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבה אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122. אנ",
    defendantParty: "שטראוס1",
    actionStage: "תוך כדי משפט",
    numberOfProsecutors: 10000,
    chance: "25%",
  },
  {
    Id: 2,
    actionName: " 222222בתביעת המאה",
    category: "חוק ההגבלים העסקיים",
    manMessages: [{
      Id: 1,
      date: "11/11/2018",
      title: "הודעה ראשונה",
      content: "זה תוכן ההודעה הראשונה והשנייה לא תהיה שונה מאוד מזאת, תתכוננו"
    }, {
      Id: 2,
      date: "11/11/2018",
      title: "הודעה שנייה",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut dhfhyjy fhfd sdfg dg dfhg  dhfghfdgh gfdsgf sdfgsdg sd sd sdhghgh d enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut dhfhyjy fhfd sdfg dg dfhg  dhfghfdgh gfdsgf sdfgsdg sd sd sdhghgh d enim ad minim veniam, quis nostrud "
    }],
    users: [{
      Id: 1,
      name: "איתי הייזלר"
    },
    {
      Id: 2,
      name: "אלה פורטנוב"
    }],
    managerUser: {
      Id: 2,
      name: "אלה פורטנוב"
    },
    startDate: "15/04/2020",
    description: "כאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבהכאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבה אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122 .כאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבה אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122. אנחנו נסתמך על חוקים הגנת הצרכן סעיף 12כאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבהכאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבה אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122 .כאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבה אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122. אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122",
    defendantParty: "פייסבוק",
    actionStage: "לפני משפט",
    numberOfProsecutors: 2000,
    chance: "50%",
  },
  {
    Id: 3,
    actionName: "לחם מלוח",
    category: "מפגע סביבתי",
    manMessages: [{
      Id: 1,
      date: "12/01/2017",
      title: "פתיחת תביעה",
      content: "שלום לכולם, אנחנו בתחילת התביעה, מחפשים כמה שיותר אנשים שיצטרפו אלינו, בבקשה הפיצו לחבריכם"
    }, {
      Id: 2,
      date: "16/10/2017",
      title: "עורך דין מצטרף",
      content: "שמח לבשר שהצטרף אלינו עורך הדין המצוין אבי רון, למרות שמו המצחיק, אני בוטח בו שיוכל להוביל אותנו לסכום נכבד"
    }],
    managerUser: {
      Id: 3,
      name: "טלי כהן"
    },
    users: [{
      Id: 1,
      name: "איתי הייזלר"
    }, {
      Id: 2,
      name: "אלה פורטנוב"
    },
    {
      Id: 3,
      name: "טלי כהן"
    }],
    startDate: "10/01/2017",
    lawyer: 'ד"ר אבי רון',
    description: "התביעה היא כנגד חברת מאפים גדולה שכמות המלח שהם מציינים שיש בלחם האחיד הרגיל שלהם, הוא לא נכון, יש מעל לפי 2 מלח וזה אחד הגורמים העיקריים ללחץ הדם הגבוה שלי",
    defendantParty: "לחם אנג'ל",
    actionStage: "לפני משפט",
    numberOfProsecutors: 3000,
    chance: "60%",
  }
];
export const dummyUser = {
  // id: "5ea6da2e79e90e30cc08a4bb",
  name: "אלה פורטנוב"
  // id:"5ea6dade79e90e30cc08a4bc",
  // name:"איתי הייזלר"
  // id: "5ea6db0a79e90e30cc08a4bd",
  // name: "טלי כהן"
    // id: "5ea6db3879e90e30cc08a4be",
  // name: "רותם חוגי",
}
