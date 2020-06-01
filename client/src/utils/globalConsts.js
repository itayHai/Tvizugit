import {
  LockOpen,
  RoomService,
  Eco,
  Accessible,
  Receipt,
  Accessibility,
  Work,
  MonetizationOn,
  AccountBalance,
  Gavel,
  Person,
} from "@material-ui/icons/";
import React from "react";

export const URL = "http://localhost:8000/graphql";

export const users = {
  lawyer: { id: 1, name: "עורך דין", icon: <Gavel /> },
  user: { id: 2, name: "משתמש", icon: <Person /> },
};

export const specialties = [
  'גבייה לעסקים',
  'הוצאה לפועל',
  'ייצוג בנקים',
  'הפקעת קרקעות',
  'תכנון ובנייה',
  'המגזר החקלאי',
  'ייפוי כוח מתמשך',
  'נדל"ן',
  'משפט אזרחי ומסחרי',
  'דיני עבודה',
  'חברות',
  'קניין רוחני',
  'צוואות',
  'פשיטת רגל',
  'ביטוח לאומי',
  'מיסים',
  'מקרקעין',
  'משרד הביטחון',
  'דיני משפחה',
  'צוואה/ירושה',
];

export const classActionsFilters = {
  MOST_PROMINENT: "MOST_PROMINENT",
  LOGGED_USER: "LOGGED_USER",
}

export const statuses = [
  "תובענה חדשה בשוק חבר'ה!",
  'תחילת תביעה - טרום עו"ד',
  "משא ומתן עם הנתבע",
  "לפני משפט",
  "תוך כדי משפט",
  "במהלך פשרה"
];
export const defendantThemes = [
'עולם תוכן נחמד',
'עולם תוכן כועס',
'עולם תוכן מתוק'
];
export const defendantTypes = [
  'סוג נחמד',
  'סוג כועס',
  'סוג מתוק'
];
export const classActionReasons = [
  'סיבה יפה',
  'סיבה מעולה',
  'סיבה מטומטמת'
];
export const classActionTypes = [
  'סוג יפה',
  'סוג מעולה',
  'סוג מטומטמת'
]
export const lawyerOffices = [
  'עידו ושות',
  'אלה ושות',
  'טלי ושות',
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
        engName: "name",
      },
      {
        name: "הגוף הנתבע הראשי",
        engName: "defendants",
      },
      {
        name: "שלב התביעה",
        engName: "status",
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
export const dummyUser = {
  // id:"5e9cae20a9c09c48d8be3776",
  // name:"איתי הייזלר"
  // id: "5ea9e2c7d34cb906dcfaf28d",
  // name: "רותם חוגי",
  id: "5e9d8bc9d43a5108ecf17822",
  name: "עידו פרלמן"
}
