### Problem:
The application was unable to connect to the MySQL database, resulting in an `OperationalError`.

### Error Messages:
1. `Access denied for user 'hbnb_dev'@'localhost' (using password: YES)`
2. `Unknown database 'hbnb_dev_db'`

### Steps to Resolve:

1. **Access the MySQL Server**:
   - Start the MySQL/MariaDB service if it's not running.
     ```bash
     sudo systemctl start mariadb
     ```

   - Access the MySQL/MariaDB server using the root user.
     ```bash
     sudo mariadb -u root
     ```

Before anything else try this
```
GRANT ALL PRIVILEGES ON hbnb_dev_db.* TO 'hbnb_dev'@'localhost' IDENTIFIED BY 'hbnb_dev_pwd';
FLUSH PRIVILEGES;
```


2. **Create the User (if not exists)**:
   - Create the MySQL user `hbnb_dev` if it doesn't exist.
     ```sql
     CREATE USER 'hbnb_dev'@'localhost' IDENTIFIED BY 'hbnb_dev_pwd';
     ```

3. **Update MySQL User Permissions**:
   - Grant all necessary permissions to the `hbnb_dev` user.
     ```sql
     GRANT ALL PRIVILEGES ON *.* TO 'hbnb_dev'@'localhost' WITH GRANT OPTION;
     FLUSH PRIVILEGES;
     ```

4. **Create the Database**:
   - Create the `hbnb_dev_db` database.
     ```sql
     CREATE DATABASE hbnb_dev_db;
     ```

5. **Exit MySQL/MariaDB**:
   - Exit the MySQL/MariaDB shell.
     ```sql
     EXIT;
     ```

6. **Export Environment Variables**:
   - Set the necessary environment variables for your application to connect to the database.
     ```bash
     export HBNB_MYSQL_USER=hbnb_dev
     export HBNB_MYSQL_PWD=hbnb_dev_pwd
     export HBNB_MYSQL_HOST=localhost
     export HBNB_MYSQL_DB=hbnb_dev_db
     export HBNB_TYPE_STORAGE=db
     ```

7. **Run Database Migrations (if applicable)**:
   - If the application uses a migration tool (like Alembic for SQLAlchemy), run the migrations to set up the necessary tables and schema.

8. **Manual Table Creation (if no migrations)**:
   - If there's no migration tool, manually create the tables based on the application's schema by logging into MySQL using the `hbnb_dev` user and running the necessary `CREATE TABLE` commands.

9. **Check Application Configuration**:
   - Ensure the application's database configuration uses the `hbnb_dev_db` database and the `hbnb_dev` user.

10. **Run the Application**:
   - After setting up the database and tables, run the application again to check if the issue is resolved.

---

This sequence ensures that all necessary steps are taken in order, and no step is skipped. Always remember to backup your data and configurations before making any changes.Absolutely, that's an important step. Let's add that in:

---

### Problem:
The application was unable to connect to the MySQL database, resulting in an `OperationalError`.

### Error Messages:
1. `Access denied for user 'hbnb_dev'@'localhost' (using password: YES)`
2. `Unknown database 'hbnb_dev_db'`

### Steps to Resolve:

1. **Access the MySQL Server**:
   - Start the MySQL/MariaDB service if it's not running.
     ```bash
     sudo systemctl start mariadb
     ```

   - Access the MySQL/MariaDB server using the root user.
     ```bash
     sudo mariadb -u root
     ```

2. **Create the User (if not exists)**:
   - Create the MySQL user `hbnb_dev` if it doesn't exist.
     ```sql
     CREATE USER 'hbnb_dev'@'localhost' IDENTIFIED BY 'hbnb_dev_pwd';
     ```

3. **Update MySQL User Permissions**:
   - Grant all necessary permissions to the `hbnb_dev` user.
     ```sql
     GRANT ALL PRIVILEGES ON *.* TO 'hbnb_dev'@'localhost' WITH GRANT OPTION;
     FLUSH PRIVILEGES;
     ```

4. **Create the Database**:
   - Create the `hbnb_dev_db` database.
     ```sql
     CREATE DATABASE hbnb_dev_db;
     ```

5. **Exit MySQL/MariaDB**:
   - Exit the MySQL/MariaDB shell.
     ```sql
     EXIT;
     ```

6. **Export Environment Variables**:
   - Set the necessary environment variables for your application to connect to the database.
     ```bash
     export HBNB_MYSQL_USER=hbnb_dev
     export HBNB_MYSQL_PWD=hbnb_dev_pwd
     export HBNB_MYSQL_HOST=localhost
     export HBNB_MYSQL_DB=hbnb_dev_db
     export HBNB_TYPE_STORAGE=db
     ```

7. **Run Database Migrations (if applicable)**:
   - If the application uses a migration tool (like Alembic for SQLAlchemy), run the migrations to set up the necessary tables and schema.

8. **Manual Table Creation (if no migrations)**:
   - If there's no migration tool, manually create the tables based on the application's schema by logging into MySQL using the `hbnb_dev` user and running the necessary `CREATE TABLE` commands.

9. **Check Application Configuration**:
   - Ensure the application's database configuration uses the `hbnb_dev_db` database and the `hbnb_dev` user.

10. **Run the Application**:
   - After setting up the database and tables, run the application again to check if the issue is resolved.
   Make sure youre in the root directory

---
