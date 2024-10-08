# SONAR
--------
Este conjunto de datos fue utilizado por Gorman y Sejnowski para estudiar la clasificación de señales de sonar mediante redes neuronales. El objetivo es entrenar un modelo que pueda diferenciar entre señales de sonar rebotadas en **minas** y aquellas rebotadas en **rocas**.

-------

# Contexto del caso

El conjunto de datos a utilizar en este caso de estudio fue extraído de **Kaggle**, una conocida página web que aloja grandes volúmenes de datos y otros contenidos relacionados al área de **data science**.

[Link al dataset](https://www.kaggle.com/datasets/rupakroy/sonarcsv)

Este dataset consiste en un conjunto de datos de un sonar de un submarino, el cual, en base a señales del sonar, se puede diferenciar entre **minas** y **rocas**. Contiene **208 patrones**, **111** de minas y **97** de rocas. Cada patrón cuenta con **60 valores** que representan distintas bandas de frecuencia.

----------

# Objetivo

En este caso de estudio, se evaluará la performance de los modelos en función de distintos cambios en la selección de atributos. Los modelos se harán por medio de Naive Bayes, dado que es un problema de clasificación binaria.

### **1. Sin selección de atributos**
> En primer lugar, se evaluará el modelo sin realizar selecciones en los atributos, es decir, usando el dataset sin modificaciones, y aplicando el bloque de Cross Validation.
El bloque Cross Validation consiste en dividir los datos en X particiones, y por medio de esas particiones, ir rotándolas para entrenar el modelo y para testear. Por ejemplo, supongamos que se seleccionan 10 particiones, el cross validation utilizaría las primeras 9 para entrenar el modelo, y la décima para testearlo. En el segundo intento, utilizaría las primeras 7 particiones y la última para entrenar, y la penúltima para testear, y así sucesivamente.

### **2. Forward Selection**
> Luego de ver el rendimiento de el modelo generado únicamente con el cross validation, se pasará a testear el modelo con Forward Selection.
Forward selection es una técnica de selección de atributos que se suele usar en el área de Machine Learning. El fin del forward selection es simplificar la complejidad de los modelos y mejorar su rendimiento, por medio de la selección de atributos. Principalmente se utiliza cuando se tienen muchas variables, para identificar las más importantes.
Basicamente, el procedimiento del forward selection parte de un modelo sin características, el cual va agregando de a una las variables, y las que logran una mayor mejora en el rendimiento del modelo, van quedando de forma permanente añadidas. En cada iteración va agregando variables hasta llegar a un criterio de parada, el cual puede ser que no haya mejoras significativas, o que se alcance un número determinado de variables.

### **3. Backward Elimination**
> Después de ver la mejora con el Forward selection, se pasará a realizar la selección con backward elimination. Este método tiene el mismo objetivo que el forward selection, optimizar las características que evalúa el modelo, solo que tienen diferencia en cuanto al procedimiento.
En el caso del Backward elimination, al revés que el forward selection, se inicia con todas las características, y en cada iteración se va eliminando la característica que menos aporta al rendimiento del modelo. Este proceso se repite hasta que el rendimiento no se vea degradado, minimizando las características a evaluar.

### **4. Optimize Selection**
> Por último, se utiliza la optimización de selección, la cual utiliza métodos evolutivos. Esta técnica inicia con una población inicial de características seleccionadas. En base a estas características, se evalúa el rendimiento del modelo, en base a métricas y cross validation. Luego, se va mutando cada conjunto de características y intercambiando con otros conjuntos. Al final, luego de evaluados los conjuntos, se seleccionan los mejores basados en su rendimiento.

--------

# Pipeline

![Alt text](/contenidos/image-14.png)

-------

# Resultados

## Cross Validation
Se obtuvieron los siguientes resultados:


![Alt text](/contenidos/image.png)
![Alt text](/contenidos/image-1.png)

------

## Forward selection
Se obtuvieron los siguientes resultados:


![Alt text](/contenidos/image-2.png)
![Alt text](/contenidos/image-3.png)

------

## Backward elimination
Se obtuvieron los siguientes resultados:


![Alt text](/contenidos/image-4.png)
![Alt text](/contenidos/image-5.png)

------

## Optimize selection (Evolutionary)
Se obtuvieron los siguientes resultados:


![Alt text](/contenidos/image-6.png)
![Alt text](/contenidos/image-7.png)


# Conclusión

Como se pudo apreciar en los resultados anteriores, la utilización de feature selection sumado al cross validation, lograron una notoria mejora en los resultados obtenidos.