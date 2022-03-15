import harry from "../assets/images/1.png";
import hermione from "../assets/images/2.png";
import ron from "../assets/images/3.png";

const contacts = [
    {
        id: 1,
        name: "Harry Potter",
        image: `${harry}`,
        phone: "+34 678 78 89 09",
        email: "harry@harry.com"
    },
    {
        id: 2,
        name: "Hermione Granger",
        image: `${hermione}`,
        phone: "+34 678 74 89 09",
        email: "hermione@hermione.com"
    },
    {
        id: 3,
        name: "Ron Weasly",
        image: `${ron}`,
        phone: "+34 600 78 89 09",
        email: "ron@ron.com"
    },
    {
        id: 4,
        name: "Draco Malfoy",
        image: "",
        phone: "+34 600 78 89 09",
        email: "draco@draco.com"
    }
]

export default contacts;