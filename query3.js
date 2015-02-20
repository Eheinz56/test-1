//answer to query 3 on test
select fname,lname from employee where not exists (select * from dependent where ssn = essn);

