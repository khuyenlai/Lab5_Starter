# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Khuyen Lai

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, a unit test would not be ideal for testing the full "message" feature because it involves multiple components like the user interface, network communication, and possibly database interactions. This would be better tested with integration or end-to-end (E2E) tests that can simulate the full user interaction and backend communication.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, a unit test is appropriate for testing the "max message length" feature because it’s a specific, isolated behavior. You can directly test the function or logic that validates message length to ensure it correctly limits messages to 80 characters or fewer.
 
https://khuyenlai.github.io/Lab5_Starter/expose.html
https://khuyenlai.github.io/Lab5_Starter/explore.html
