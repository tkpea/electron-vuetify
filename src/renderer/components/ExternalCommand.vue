<template>
  <v-layout justify-center align-center>
    <div class="text-center">
      <h2>EXTERNAL COMMAND</h2>
      <v-btn depressed color="primary" @click.stop="execShell">ShellScriptを実行</v-btn>
      <v-btn depressed color="error" @click.stop="execPython">Pythonを実行</v-btn>
    </div>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Message</v-card-title>
        <v-card-text>{{message}}</v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import { app } from "electron";
import { exec } from "child_process";
export default {
  name: "external-command",
  data() {
    return {
      dialog: false,
      message: ""
    };
  },
  methods: {
    execShell: function() {
      const cmd =
        process.env.NODE_ENV === "development"
          ? require("path").join(__dirname, "../../../bin/hello.sh")
          : require("path").join(process.resourcesPath, "bin/hello.sh");

      exec(cmd, (error, stdout, stderr) => {
        if (!error) {
          this.dialog = true;
          this.message = stdout;
        }
      });
    },
    execPython: function() {
      const cmd =
        process.env.NODE_ENV === "development"
          ? `python ${require("path").join(__dirname, "../../../bin/hello.py")}`
          : `python ${require("path").join(
              process.resourcesPath,
              "bin/hello.py"
            )}`;
      // eslint-disable-next-line handle-callback-err
      exec(cmd, (error, stdout, stderr) => {
        if (!error) {
          this.dialog = true;
          this.message = stdout;
        }
      });
    }
  }
};
</script>