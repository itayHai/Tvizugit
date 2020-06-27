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
'בנקים',
'ביטוח',
'מסחר ושירותים',
'נדל"ן ובינוי',
'תעשייה',
'השקעה ואחזקות',
'נפט וגז'
];
export const defendantTypes = [
  'רשות מקומית',
  'רשות ציבורית',
  'עמותה',
  'חברה נסחרת בבורסה',
  'חברה שאינה נסחרת בבורסה',
  'חברה ממשלתית',
  'יחיד',
  'תאגיד עירוני'
];
export const classActionReasons = [
  'הפרת אמונים',
'הפרת חוק האחריות למוצרים פגומים',
'הפרת חובת הזהירות',
'הפרה של חוק האזנות סתר ',
'הפרת תנאי רישיון',
'הפרת חוק הדואר',
'הפרת חוק חוזה ביטוח',
'הפרת הוראות התקשי"ר',
'הפרת הזכות לישיבה בעבודה',
'הפרת תקנות תכנון ובניה',
'הפרת חוק יסוד כבוד האדם',
'הפרת חוק יסוד משק המדינה',
'הפרת חוק ההגבלים העסקיים',
'פגיעה בעקרון חוקיות המנהל',
'חריגה מסמכות',
'הפרת חוק שכר המינימום',
'הפרת צו ההרחבה לפנסיה',
'אי תשלום דמי חגים',
'הפרת חוק הגנת השכר',
'הפרת חובת ההגינות',
'חוסר סבירות',
'ביטול עסקה',
'הפרת חוק השירותים הפיננסים',
'הפרת ההכרה במעמד כעובד',
'הפרה של חוק חנייה לנכים',
'הפרת עסקה לתקופה קצובה',
'הפרת צו פיקוח על מצרכים',
'הפרת חוק התקנים',
'הפרת דיני העבודה',
'הפרת דיני ההקפאה',
'רשלנות',
'איסור הטעייה',
'הפרת תקנות בריאות הציבור',
'הפרה של כללי הבנקאות ',
'עשיית עושר ולא במשפט',
'הפרת חובה חקוקה',
'אי גילוי נאות',
'הטעיה חוזית',
'הפרת חובת הגילוי',
'ניצול מצוקה',
'גביית כספים שלא כדין',
'הפרת חוזה',
'הפרה של חובת תום הלב',
'תרמית',
'הפרת חוק המכר',
'הפרת חוק הספאם',
'גזל',
'השגת גבול במיטלטלין',
'הפרה של חוק אחריות לטובין ושירותים',
'הפרה של חוק התקשורת',
'הפרת חובת נאמנות ואמון בניגוד לחוק הבנקאות',
'מטרד',
'אפליה',
'גבייה שלא כדין',
'פגיעה באוטונומיה',
'הפרת רישיון',
'הפרה של חוק שוויון זכיוות לאנשים עם מוגבלויות',
'קיפוח בעלי מניות',
'תנאי מקפח',
'פגיעה בפרטיות',
'הפרת חובת ההגינות',
'עושק'
];


export const classActionTypes = [
  'סעיף 1',
  "ס' 10(1)- תביעה בעילה אשר לבית דין אזורי לעבודה הסמכות הייחודית  לדון בה לפי סעיף 24(א)(1), (1א) או (3) לחוק בית הדין לעבודה",
  'סעיף 2',
  'סעיף 3',
  'סעיף 4',
  'סעיף 5',
  'סעיף 6',
  'סעיף 7',
  'סעיף 8',
  'סעיף 9',
  'סעיף 10',
  'סעיף 11',
  'סעיף 12',
  'סעיף 13',
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

export const resultTypes = {
  CLASS_ACTION: "classAction",
  REPORTED_CLASS_ACTION: "reportedClassAction",
  LAWYER: "lawyer",
}

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
        name: "שם המשרד",
        engName: "name",
      },
      {
        name: "התמחות",
        engName: "expertise",
      },
      {
        name: "מספר תיקים",
        engName: "classactions",
      },      
      {
        name: "ותק",
        engName: "seniority",
      },
    ],
  },
  // {
  //   name: "reportedClassActions",
  //   classActionPro: [
  //     {
  //       name: "שם התביעה",
  //       engName: "name",
  //     },
  //     {
  //       name: "הגוף הנתבע",
  //       engName: "defendants",
  //     },
  //     {
  //       name: "שלב התביעה",
  //       engName: "status",
  //     },
  //     {
  //       name: "מספר תובעים",
  //       engName: "numberOfProsecutors",
  //     },
  //     {
  //       name: "קטגוריה",
  //       engName: "category",
  //     },
  //   ],
  // }
];
export const dummyUser = {
  // id:"5e9cae20a9c09c48d8be3776",
  // name:"איתי הייזלר"
  // id: "5ea9e2c7d34cb906dcfaf28d",
  // name: "רותם חוגי",
  id: "5e9d8bc9d43a5108ecf17822",
  name: "עידו פרלמן"
}
