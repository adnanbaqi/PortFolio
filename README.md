## Usage

1. Start the development server: `npm run dev`
2. Open your browser and visit `http://localhost:3000` to view the website.

## Dependencies

The following dependencies are required for this project:

- Next.js: A React framework for server-side rendering and static site generation.
- Tailwind CSS: A highly customizable CSS framework.
- React: A JavaScript library for building user interfaces.
- React Icons: A collection of popular icons for React projects.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Resend: Resend is the email API for developers.


# Docker Desktop NVIDIA Runtime Setup for Windows

Follow the steps below to configure Docker Desktop on Windows to use the NVIDIA runtime.

<details>
  <summary><strong>1. Ensure You Have WSL 2 Enabled and Docker Desktop GPU Support</strong></summary>
  
  - **Docker Desktop** on Windows uses **WSL 2** (Windows Subsystem for Linux version 2) as its backend. For GPU support, ensure you have the **NVIDIA drivers for WSL** installed.
  - Follow the steps in the [NVIDIA WSL 2 installation guide](https://developer.nvidia.com/cuda/wsl) to install the necessary drivers.
  - In **Docker Desktop** settings, go to **Resources** > **WSL Integration** and make sure your Linux distributions are enabled.

</details>

<details>
  <summary><strong>2. Show Hidden Files and Folders</strong></summary>

  The `ProgramData` folder is hidden by default. To reveal it:
  - Open **File Explorer**.
  - Click on the **View** tab in the ribbon at the top.
  - Check the box for **Hidden items** to show hidden files and folders.
  
</details>

<details>
  <summary><strong>3. Navigate to the Docker Configuration Folder</strong></summary>
  
  - In **File Explorer**, go to:
    ```
    C:\ProgramData\Docker\config\
    ```
  - If you can’t find the `ProgramData` folder, you can manually type the path into the address bar of **File Explorer**.

</details>

<details>
  <summary><strong>4. Create the `daemon.json` File</strong></summary>
  
  - If the `config` folder doesn't exist, create it by:
    - Right-click inside the `Docker` folder, select **New > Folder**, and name the folder `config`.
  - Inside the `config` folder, right-click and select **New > Text Document**.
  - Rename the file to `daemon.json` (make sure to change the extension from `.txt` to `.json`).
  
</details>

<details>
  <summary><strong>5. Edit the `daemon.json` File</strong></summary>
  
  - Right-click the newly created `daemon.json` file and select **Edit** (use Notepad or any text editor).
  - Add the following configuration to enable the NVIDIA runtime:
    ```json
    {
      "runtimes": {
        "nvidia": {
          "path": "nvidia-container-runtime"
        }
      }
    }
    ```
  - Save the file after editing.
  
</details>

<details>
  <summary><strong>6. Restart Docker Desktop</strong></summary>
  
  - After modifying the `daemon.json` file, restart Docker Desktop:
    - Right-click the Docker Desktop icon in your system tray (near the clock).
    - Click **Restart Docker**.
  
</details>

<details>
  <summary><strong>7. Verify NVIDIA Runtime Configuration</strong></summary>
  
  To verify that the NVIDIA runtime is now recognized by Docker:
  - Open **PowerShell** or **Command Prompt** and run:
    ```bash
    docker info | findstr "Runtimes"
    ```
  - You should see `nvidia` listed as one of the available runtimes if everything is set up correctly.
  
</details>

<details>
  <summary><strong>8. Running a Docker Container with GPU</strong></summary>
  
  Now, you can run Docker containers using the NVIDIA runtime:
  ```bash
  docker run --runtime=nvidia --gpus all -ti <your-container-image>
