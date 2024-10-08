# CARDIAC
-----
# Contexto del caso

En el caso de estudio presente, se analizará un dataset tomado de la base de datos Dr. García, reconocido cardiólogo interesado en obtener una herramienta que le permita anticipar el segundo paro cardíaco de sus pacientes. Para esto, se implementará un modelo de Machine Learning que en base a ciertos datos provistos de los pacientes, se pueda predecir si son propensos a sufrir un segundo paro cardíaco. De esta manera, el doctor podrá instaurar un programa de ayuda para prevenir dichos ataques, especialmente con los pacientes más propensos.

Los datos obtenidos por el Dr. son:
- La edad de los pacientes, redondeada al año más cercano
- El estado civil de los mismos, mediante un valor numérico. 0 - soltero, 1 - casado, 2 - divorciado, 3 - viudo.
- Sexo, siendo 0 para femenino y 1 para masculino
- Categoría de peso, con tres niveles: 0 - normal, 1 - sobrepeso, 2 - obeso
- Colesterol registrado en el momento del tratamiento en su ataque cardíaco más reciente.
- Manejo de estrés: 1 si participó de cursos de manejo de estrés, 0 si no
- Trat_ansiedad: Valor que indica el nivel de estrés de cada persona y su habilidad para manejarlo. Valor de 0 si nunca siente ansiedad, 100 si vive en un estado de estrés constante y no puede sobrellevarlo.
- 2do_Ataque_Corazón: Atributo del dataset de entrenamiento que indica la variable objetivo. "SI" si ya se tuvo un segundo infarto, de lo contrario "NO".

Se utilizará un dataset para entrenamiento y otro para aplicar el modelo y ver sus predicciones.

-------

# Objetivo

En base a los datos, se entrenará un modelo de Logistic Regression, el cual tendrá como objetivo el **2do_Ataque_Corazón**. Luego, el modelo se le aplicará al dataset "cardiac-scoring", para ver las predicciones.

-------
# Pipeline

![Alt text](/contenidos/image-15.png)
![Alt text](/contenidos/image-16.png)

--------
# Resultados

## Cross validation con training data
![Alt text](/contenidos/image-17.png)
![Alt text](/contenidos/image-18.png)

-----

## Performance con test data
![Alt text](/contenidos/image-19.png)
![Alt text](/contenidos/image-20.png)

------
# Conclusión

Una vez finalizado este caso, vemos que el modelo durante el cross validation, resultó ser bastante preciso al predecir los paros cardíacos de las personas del dataset de training. 

Por otro lado, vemos que el dataset de test arrojó resultados con bastante confianza. Al tener altos niveles de confianza, el doctor puede tomar estos datos como herramienta, sin embargo, deben ser utilizados solamente como eso, como una herramienta de ayuda, no como una decisión final, dado que el modelo puede tener resultados no acertados.