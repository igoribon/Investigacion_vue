<template>
  <div id="todolist">
      <section class="tareas">
          <input type="text" id="titulo" placeholder="Tarea">
          <input type="number" id="tiempo" placeholder="Horas" min="1" step="1">
          <button @click="task" class="task button">
              <img class="icon" src="../assets/mas.png" alt="Agregar tarea" style="width: 25px;">
          </button>
      </section>

      <section v-if="tasks.length > 0" class="section_tareas">
          <div class="listaTareas">
              <ul>
                  <li v-for="(task, key) in tasks" :key="key">
                      {{ task.title }} -> {{ task.time }} horas 
                      <button @click="borrar(key)" class="borrar button">
                          <img class="icon" src="../assets/borrar.png" alt="Borrar tarea" style="width: 25px;">
                      </button>
                  </li>
              </ul>
          </div>

          <section class="horas">
              <h2>Tiempo total: {{ totalHoras }} horas</h2>
          </section>
      </section>

      <section v-else class="sinTareas">
          <h2>No hay tareas por el momento</h2>
      </section>
  </div>
</template>

<script>
export default {
  data() {
      return {
          tasks: [],
          newTask: {
              title: "",
              time: 0,
          }
      }
  },
  methods: {
      task() {
          const title = document.getElementById("titulo").value;
          const time = parseInt(document.getElementById("tiempo").value);

          if (title !== '' && !isNaN(time)) {
              this.tasks.push({
                  title: title,
                  time: time
              });

              this.newTask = {
                  title: "",
                  time: 0,
              };
          } else {
              alert('La tarea y el tiempo deben tener un valor correcto');
          }

          localStorage.setItem('tasks', JSON.stringify(this.tasks));
      },

      borrar(taskIndex) {
          this.tasks.splice(taskIndex, 1);
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
  },
  computed: {
      totalHoras() {
          let total = 0;
          this.tasks.forEach(task => {
              total += parseInt(task.time);
          });
          return total;
      }
  },
  created() {
      const tasks = localStorage.getItem('tasks');
      if (tasks) {
          this.tasks = JSON.parse(tasks) || [];
      }
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

#todolist {
  align-items: center;
  display: flex;
  flex-direction: row;
  font-family: 'Inter', sans-serif;
  justify-content: space-evenly;

  & .tareas {
    align-self: start;
    display: grid;
    grid-template-areas: "title time"
                          "button button";
    justify-items: center;
    margin-block-start: 20px;
    width: 50%;

    input {
      border: none;
      border-bottom: 1px solid #ccc;
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      outline: none;
      padding: 5px;
      width: 90%;

      & #titulo {
        grid-area: title;
      }

      & #horas {
        grid-area: time;
      }
    }

      & .task {
        grid-area: button;
        margin-block-start: 20px;
      }
  }

  & .section_tareas {
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 50%;

    & .listaTareas {
      & ul {
        list-style: none;
        padding: 0;
        pointer-events: none;

        & .borrar {
          pointer-events: auto;
        }

        & li {
          align-items: center;
          border-radius: 10px;
          border: 1px solid black;
          display: flex;
          justify-content: space-between;
          margin-block: 15px;
          padding: 5px;
          transition: 0.5s;
          width: 400px;

          &:hover {
            background-color: crimson;
            color: white;
            opacity: 0.9;
          }
        }
      }
    }
  }

  & .icon {
    width: 25px;
  }

  & .horas {
    align-self: start;
    margin-left: 25px;
    width: 50%;

    h2 {
      text-align: end;
    }
  }

  & .button {
    align-items: center;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    outline: none;

    &:hover {
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 1920px) {
  #todolist {
    flex-direction: column;

    & .tareas {
      align-self: center;
      width: 100%;
    }

    & .section_tareas {
      justify-content: center;
    }
  }
}

@media screen and (max-width: 600px) {
  #todolist {
    .section_tareas {
      flex-direction: column-reverse;

      & .listaTareas {
        & ul {
          & li {
            width: max-content
          }
        }
      }

      & .horas {
        margin: 0;
        width: 100%;

        & h2 {
          text-align: center;
        }
      }
    }
  }
}

@media screen and (max-width: 400px) {
  #todolist {
    & .tareas {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>