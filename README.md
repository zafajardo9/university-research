# university-research

# NOTES
## To activate the environment
```cmd
env\scripts\activate
```


## To install dependencies
```
py -m pip install
```

```
python manage.py startapp base 
```

## To run the App
```
python manage.py runserver
```

## To put Tailwind
```
npm install tailwindcss

```

### FOR Tailwind update css
```
npx tailwindcss build static/css/styles.css -o static/css/styles.css
```



- Remember to edit in 'tailwind.config.js'
```javascript
module.exports = {
  purge: ['./**/*.html'],
  // ...
};

```

- Connecting to Postgresql?

```
pip install psycopg2-binary
```

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'yourdbname',
        'USER': 'yourdbuser',
        'PASSWORD': 'yourdbpassword',
        'HOST': 'localhost',  # Or your PostgreSQL server's hostname
        'PORT': '',           # Leave empty to use the default PostgreSQL port (5432)
    }
}

```


