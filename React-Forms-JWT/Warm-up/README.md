## As a warm-up to our React workshop, we will first make a form in HTML.

1. Anywhere in your file system, create an HTML file and open it in your coding editor.
2. Initialize it with boilerplate HTML tags, at a minimum <!DOCTYPE html>, <html> and <body> tags.
3. Create a <form> Element.
4. Add an action property to the opening <form> tag.
5. We will have the action of the form prompt your browser to open your system's default email application and send a message. (You do not have to use a real email). Set the action property to "mailto:some-fake-@email.com".
6. Within your <form>, create two <input> tags, each preceded by a <label> tag. The first input can be for a username, and the second for a password. Give the labels some inner text, either username or password. You can also separate each tag with a <br /> to put each on new lines for visual organization.
7. Lastly, create an <input> tag whose type is "submit", and the value is "Submit" as well. (This will display a button.)
8. Next, we can associate each label with the associated inputs. Give each of your <input> elements a name property. Let us make the first's property to be username, and the second's password.
9. Now, on each label, pass the associated name of the input to the label's for property.
10. Open your HTML file, fill out the form, and try it out!
