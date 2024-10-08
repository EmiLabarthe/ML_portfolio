# GOLF
-----
# Contexto del caso

Para este caso de estudio, se decidió tomar un dataset provisto por RapidMiner, llamado golf. Este dataset contiene como atributos distintas condiciones del día, tales como viendo, humedad, temperatura y estado del tiempo. En base a estos datos, la etiqueta a analizar es si se juega al golf o no:

![Alt text](/contenidos/image-8.png)

Se utilizará un dataset para entrenamiento y otro para testeo del modelo.

-------

# Objetivo

En este caso, se evaluará en base a las condiciones climáticas, si se jugará al golf o no. Para generar el modelo, se aplicará Naive Bayes, dado que es un problema de clasificación y la salida es binomial.

-------
# Pipeline

![Alt text](/contenidos/image-13.png)

--------
# Resultados

## Cross validation con training data
![Alt text](/contenidos/image-9.png)
![Alt text](/contenidos/image-10.png)

-----

## Performance con test data
![Alt text](/contenidos/image-11.png)
![Alt text](/contenidos/image-12.png)

------
# Conclusión

Como se pudo apreciar en los resultados anteriores, el modelo pudo llegar a resultados aceptables con el dataset de test, pese a ser un dataset que solo contaba con 14 filas para entrenamiento.