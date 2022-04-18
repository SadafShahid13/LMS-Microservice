# LMS-Microservice

## Instructions on how to use this Repository
### Setting Up
1. Install Docker Desktop along with a Linux Distr. (For Windows)
2. Navigate to each of the services and execute the following commands in the terminal to build and run the docker
  a. "docker build -t <service_name> ."
  b. "docker run --name <service_instance_name> -p <port_number>:<port_number> <service_name>"
3. An NPM install + NPM Start will also work (but can only use one service at a time.

### For the Eye-Tracker part
1. In google colab, use the "eye_tracker.ipynb" in '/code/Eye_tracker/' and open a new notebook.
2. Mount a drive to the notebook.
3. Take a forward facing image of a person and copy its path
4. Paste it in the 3rd cell.
5. Run all the cells in sequence.
