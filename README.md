# 🧠 Ejercicios de Lógica de Programación en JavaScript

Bienvenido a mi repositorio de **ejercicios de lógica de programación en JavaScript** 💻  
Aquí encontrarás una colección de problemas resueltos que fortalecen el pensamiento lógico, la creatividad y la capacidad para resolver desafíos mediante código.

---

## 🎯 Objetivo del repositorio

Este proyecto tiene como propósito principal:

- Desarrollar el **pensamiento algorítmico**.  
- Practicar la **resolución de problemas** usando estructuras básicas de programación.  
- Comprender el uso de **condicionales, bucles, funciones, arreglos y recursividad**.  
- Consolidar las bases para proyectos más avanzados en **JavaScript**.

---

## 🧮 Ejercicio 1: Calculadora básica

**Descripción:**  
Crear una función que permita realizar las cuatro operaciones aritméticas básicas: **suma**, **resta**, **multiplicación** y **división**.  
La función debe recibir **tres parámetros**:
1. El primer número `a`
2. El segundo número `b`
3. El nombre de la operación (en minúsculas)

Si el parámetro de operación no es válido, se mostrará un **mensaje de error personalizado** en la consola.

**Código:**

```javascript
// Realizar una función que nos permita hacer las 4 operaciones aritméticas
// Es decir, que nos permita sumar, restar, dividir y multiplicar.
function calcular(a, b, operacion) {
  switch (operacion) {
    case "suma":
      return console.log(a + b);
    case "resta":
      return console.log(a - b);
    case "multiplicacion":
      return console.log(a * b);
    case "division":
      return b !== 0 ? console.log(a / b) : console.error("Error: División por cero no permitida");
    default:
      console.error("Error: Operación no válida");
  }
}

// Ejemplo de uso:
calcular(12, 5, "suma"); // 👉 Resultado: 17