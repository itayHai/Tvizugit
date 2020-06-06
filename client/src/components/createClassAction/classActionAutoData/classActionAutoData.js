import React, { useState } from "react";
import { getHashtags } from "../../hashtagCreator/hashtagCreator";
import { Input } from "@material-ui/core";
import classes from "./classActionAutoData.module.css";
import Chip from "@material-ui/core/Chip";

const ClassActionAutoData = (props) => {
  const tags = getHashtags(
    props.classAction.name,
    props.classAction.description,
    props.classAction.defendants
  );

  let [hashtags, setHashtags] = useState(tags);
  const [value, setValue] = useState("");

  const deleteHashtag = (tag) => {
    setHashtags(hashtags.filter((hashtag) => hashtag !== tag));
  };

  const keyDownHandler = (event) => {
    if (["Enter", "Tab", ","].includes(event.key)) {
      event.preventDefault();
      hashtags.push(value.trim());
      setValue("");
    }
  };

  const inputChangedHandler = (event) => {
    setValue(event.target.value);
  };

  const allHashtags = hashtags.map((tag, index) => {
    return (
      <Chip
        className={classes.tag}
        key={index}
        label={"#" + tag}
        onDelete={() => deleteHashtag(tag)}
      />
    );
  });

  props.addHashtags(hashtags);

  return (
    <div>
      <div>
        <h2 className={classes.title}>
          תגיות שאנחנו חושבים שיתאימו לתובענה שלך
        </h2>
        <h5>
          על מנת שיהיה פשוט למצוא את התובענה שלך, מומלץ להסיר תגיות לא מתאימות
          ולהוסיף תגיות במידה ונדרש
        </h5>
        <div>{allHashtags}</div>
        <Input
          className={classes.addHashtag}
          value={value}
          placeholder="הוסף תגיות משלך לחיפוש נוח יותר של התובענה"
          onChange={inputChangedHandler}
          onKeyDown={keyDownHandler}
        ></Input>
      </div>
      <div>
        <h2>סיכויי ההצלחה של התובענה </h2>
      </div>
    </div>
  );
};

export default ClassActionAutoData;
