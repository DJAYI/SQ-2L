export const stages = [
  {
    id: 1,
    title: "chapter_1",
    levels: [
      {
        level_1: {
          title: "",
          type: "",
          columns: 0,
          description: "!Crea tu primera base de datos!",
          statement:
            "Utiliza las Keywords CREATE y DATABASE para crear tu primera base de datos!",
          flags:
            "Tips: CREATE es la primera palabra clave antes de crear cualquier objeto en una base de datos",
        },

        level_2: {
          title: "",
          type: "",
          columns: 0,
          description: "!Crea tu primera tabla SQL con sus tipos de datos!",
          statement:
            "utiliza las sentencias CREATE y TABLE para crear tu primera tabla en la base de datos, añadele un nombre de tu preferencia!,",
          flags: "tips: ¡Utiliza la sentencia CREATE antes de usar TABLE para crear correctamente la tabla!",
        },

        level_3: {
          title: "",
          type: "",
          columns: 0,
          description: "Tipos de Datos en SQL!",
          statement:
            "Crea un tabla users con sus respectivos campos (id, name, email, cellphone, create_at) además asígnales sus respectivos tipos de datos!",
          flags:
            "tips: Utiliza PRIMARY KEY, VARCHAR(), BIGINT, DATETIME para lograr tu objetivo!",
        },

        level_4: {
          title: "",
          type: "",
          columns: 0,
          description: "Restricciones en SQL",
          statement:
            "crea un tabla users con los siguientes campos (id, name, email, cellphone, create_at) con los siguientes requerimentos: el nombre debe tener como maximo 10 caracteres al igual que el email, ¡el campo email no puede ser nulo y debe ser unico!",
          flags:
            "tips: NOT NULL, VARCHAR(LENGHT), UNIQUE",
        },
      },
    ],
  },
];
