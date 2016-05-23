I pushed this new branch admin-bike-acc, which is an accordian added to the bikes page with labels added of (price, caption,
color, and type). I removed the text box and added quite a few things in different areas, such as routing, a new factory, and
various other changes. I did this due to the text-angular labels being different than in the pages news and announcements.
All that needs to be done most likely is back-end work. I was getting an error which

said:

{"controller"=>"sections", "action"=>"show", "section"=>"bikes"}  Section Load (0.2ms)  SELECT  "sections".* FROM "sections" WHERE "sections"."name" = $1 LIMIT 1  [["name", "bikes"]]
Completed 500 Internal Server Error in 3ms (ActiveRecord: 0.2ms)

Basically in news it had (news), announcements (announcements), but when I tried to use bikes (bikes), it kept giving me that
error. 
