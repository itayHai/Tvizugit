import {LockOpen,RoomService,Eco,Accessible,Receipt,Accessibility,Work,MonetizationOn,AccountBalance } from "@material-ui/icons/";
import React from 'react';


export const categories = [
  { id: 1, name: "חוק הגנת הצרכן", icon: <Accessibility/> },
  { id: 2, name: "ביטוח", icon: <LockOpen/> },
  { id: 3, name: "בנקאות", icon: <AccountBalance/>},
  { id: 4, name: "חוק ההגבלים העסקיים", icon: <Receipt/> },
  { id: 6, name: "מפגע סביבתי", icon: <Eco/>},
  { id: 7, name: "אפליה בשירות", icon: <RoomService/> },
  { id: 8, name: "אפליה בעבודה ושכר", icon: <Work/> },
  { id: 9, name: "נגישות", icon: <Accessible/> },
  { id: 11, name: "גבייה שלא כדין", icon: <MonetizationOn/> },
];


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
