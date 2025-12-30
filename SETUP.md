# Quick Setup Guide

## Issue: Seeing bare bones page with directories

If you're seeing a directory listing instead of the website, it means:

1. **Dependencies are not installed** - You need to install npm packages first
2. **Dev server is not running** - Next.js needs to be running to serve the app

## Step-by-Step Fix

### Step 1: Install Node.js (if not installed)
- Download from: https://nodejs.org/
- Install the LTS version
- Restart your terminal after installation

### Step 2: Verify Installation
Open PowerShell or Command Prompt and run:
```bash
node --version
npm --version
```

Both commands should show version numbers.

### Step 3: Install Dependencies
Navigate to the project folder and run:
```bash
cd C:\Users\Jordan\Downloads\personalFolio-v2
npm install
```

This will install all required packages (React, Next.js, Tailwind, etc.)

### Step 4: Start the Development Server
```bash
npm run dev
```

You should see:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
```

### Step 5: Open in Browser
Open your browser and go to: **http://localhost:3000**

## Important Notes

- ❌ **DON'T** open HTML files directly in the browser
- ❌ **DON'T** use a simple file server
- ✅ **DO** use `npm run dev` to start the Next.js server
- ✅ The website only works when the Next.js dev server is running

## Troubleshooting

### If npm is not recognized:
1. Make sure Node.js is installed
2. Restart your terminal/command prompt
3. Try using the full path: `C:\Program Files\nodejs\npm.cmd install`

### If you see errors after npm install:
- Make sure you're in the correct directory
- Try deleting `node_modules` and `package-lock.json` and run `npm install` again

### If the page is still blank:
- Check the terminal for error messages
- Make sure all files are in the correct locations
- Verify you're accessing http://localhost:3000 (not file://)


