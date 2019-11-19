<p align="center">
  <img width="350" height="350" src="https://s3.amazonaws.com/awsmp-logos/cloudinary.png">
  <img width="250" height="350" src="https://d37xsajsdyperf.cloudfront.net/assets/node-pg-084a19b5984263a44b078dbdb1cd9d252d7b520da18f63763840a7eb800dba28.png">
</p>


# Berikut adalah penejelasan mengenai Restfull Movie (Backend) :
  Restful_Movie merupakan aplikasi yang dibuat dengan menggunakan Node.js dan Express.js

## List Fitur :

1. CRUD Movie
2. CRD Category
3. Detail
4. Stream Video
5. Upload gambar ke coldinary
6. Upload video ke folder public/video backend

## List Requirement :

1. Node version : v10.17.0
2. Npm  version : 6.11.3
3. Postgresql
4. PgAdmin III
6  Visual Studio Code
7. Postman

## List Dependencies :

1. body-parser        : version 1.19.0         ( npm i body-parser )
2. cloudinary         : version 1.16.0         ( npm i cloudinary )
4. dotenv             : version 8.2.0          ( npm i dotenv )
5. express            : version 4.17.1         ( npm i express )
6. express-fileupload : version 1.1.6-alpha.6  ( npm i express-fileupload )
7. mv                 : version 2.1.1          ( npm i mv )
8. nodemon            : version 1.19.4         ( npm i nodemon )
9. uuid               : version 3.3.3          ( npm i uuid )

## Cara menjalankan :

1. Jalankan server postgresql dan masuk sebagai super user   (sudo -i -u postgres)
2. Jalankan PgAdmin III dan koneksikan dengan localserver menggunakan akun super user
2. Buat databse baru dengan nama Nostra Movie
3. Kemudian import backup database yang ada di folder database
4. Rubah data pada .env
    
    ```
    PORT= port yang anda gunakan
    URL = url yang anda gunakan

    CLOUD_NAME= Nama coldinary akun anda
    API_KEY= API KEY coldinary akun anda
    API_SECRET= API_SECRET coldinary akun anda

    PGUSER= nama user posgresql anda
    PGHOST= host posgresql anda
    PGPASSWORD= password posgresql anda
    PGDATABASE=Nostra Movie
    PGPORT= port posgresql anda
    ```
    
5. Setelah berhasil buka terminal dan masuk ke dalam directory project Nostra Movie
6. Kemudian jalankan dengan perintah "Npm start"
7. Stelah itu buka postman untuk menggunakan API yang tersedia

## List Api

**1. Movie**
  
 - Get Movie ( (URL dan port yang anda gunakan) /movies ) 
  ```
    ex:( http://localhost:3000/movies )
  ```
 - Add Movie ( (URL dan port yang anda gunakan) movies/add )    
  ```
    ex:( http://localhost:3000/movies/add )
  ```
  ```
  FIELD PADA FORM INPUT YANG DIGUNAKAN ('name', 'name_category', 'description', 'image (type file)', 'video (type   file)')
  ```  
  - Delete Movie ( (URL dan port yang anda gunakan) /movies/delete ) 
   ```
    ex:- ( http://localhost:3000/movies/delete ) 
       - (http://localhost:3000/movies/delete?id_movie=ab786b20-0118-11ea-aa19-1b2c5a892980)
   ```
   ```
   FIELD PADA PARAM YANG DIGUNAKAN ('id_movie')
   ```
   - Update Movie ( (URL dan port yang anda gunakan) movies/update/(id_movie yang akan di ubah) )    
   ```
    ex:( http://localhost:3000/movies/update/1 )
   ```
   ```  
   FIELD PADA FORM INPUT YANG DIGUNAKAN ('name', 'name_category', 'description', 'image (type file)', 'video (type file)') 
   ``` 
   - Get Detail Movie ( (URL dan port yang anda gunakan) /movies/detail ) 
    ```
    ex:( http://localhost:3000/movies/detail ) ex : (http://localhost:3000/movies/detail?id_movie=5facb920-01cd-11ea-9969-57c9e0692d6e)
    ```
   FIELD PADA PARAM YANG DIGUNAKAN ('id_movie')
   ```

**2. name_category**
   - Get Categories ( (URL dan port yang anda gunakan) /categories ) 
   ```
   ex:( http://localhost:3000/categories )
   ```
   - Add Categories ( (URL dan port yang anda gunakan) categories/add )    
   ```
   ex:( http://localhost:3000/categories/add )
   ```  
     ```
     FIELD PADA FORM INPUT YANG DIGUNAKAN ('name_category')
     ```
   - Delete Categories ( (URL dan port yang anda gunakan) /categories/delete ) 
   ```
   ex:( http://localhost:3000/categories/delete ) 
   ex : (http://localhost:3000/categories/delete?id_category=ab786b20-0118-11ea-aa19-1b2c5a892980)
   ```   
   ```
      FIELD PADA PARAM YANG DIGUNAKAN ('id_category')
   ```
