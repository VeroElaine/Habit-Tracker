create database habit_app;
create table habits (id SERIAL, title VARCHAR(64), description VARCHAR(200), daysOfWeek VARCHAR(32), timing VARCHAR(60),completed BOOLEAN, comments VARCHAR(100));

insert into habits (title, description, daysOfWeek,timing,completed,comments)VALUES ('test Habit','test Habit','Monday,Tuesday','7.00AM',true,'Done it');

///testing post route in postman
  {"title":"testingPostRoute",
  "description":"testingPostRoute",
  "daysOfWeek":"Tuesday,Wednesday",
  "timing":"8.00AM",
  "completed":"false",
  "comments":"Trying to get it done"
     }
     ///testing put testing put route
     {"title":"testingPutRoute",
"description":"testingPutRoute",
"daysOfWeek":"Tuesday,Wednesday",
"timing":"8.00AM",
"completed":"false",
"comments":"Trying to get it done"
   }
   and tehn updating it to
   
