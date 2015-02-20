//this is the answer to query 2

select e.fname, e.lname from employee as e, employee as s where s.lname = 'Borg' and e.super_ssn = s.ssn;
 
