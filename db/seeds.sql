INSERT INTO department (name)
VALUES ("Sales"),
       ("Technology"),
       ("Marketing"),
       ("Customer Service"),
       ("Accounting");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Representative", 52000, 1),
       ("Sales Manager", 80000, 1),
       ("IT Support Specialist", 60000, 2),
       ("JR Solutions Developer", 70000, 2),
       ("VP of Technology", 200000, 2),
       ("Market Researcher", 40000, 3),
       ("Marketing Manager", 58000, 3),
       ("Universal Agent", 40000, 4),
       ("Senior Relationship Advisor", 50000, 4),
       ("Call Center Leader", 60000, 4),
       ("Accounts Receivable Rep", 45000, 5),
       ("Accounts Payable Rep", 48000, 5),
       ("Accounting Manager", 75000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Reed", 1, NULL),
       ("Barb", "Tisho", 2, 1),
       ("Bob", "Wills", 3, NULL),
       ("Norbert", "Smith", 4, NULL),
       ("JR", "White", 5, 2),
       ("Lauren", "Walters", 6, NULL),
       ("Clarice", "Jones", 7, 3),
       ("Sara", "Thompson", 8, NULL),
       ("Beth", "Corstein", 9, NULL),
       ("Amzudi", "French", 10, 4),
       ("Nori", "Stevens", 11, NULL),
       ("Suzie", "Que", 12, NULL), 
       ("Paul", "Jones", 5);

       