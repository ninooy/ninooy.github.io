---
layout: experiment
title: Experiment
permalink: /experiment/
nav: true
nav_order: 5
---

<!-- Loading Screen -->
<div class="loading-screen">
  <div class="loading-logo">JIWON'S LAB</div>
  <div class="loading-robot">
    <div class="head">
      <div class="eye left"></div>
      <div class="eye right"></div>
    </div>
    <div class="body"></div>
    <div class="leg left"></div>
    <div class="leg right"></div>
  </div>
  <div class="loading-progress-container">
    <div class="loading-progress-bar"></div>
  </div>
  <div class="loading-status">Initializing...</div>
</div>

<!-- Main Canvas -->

<canvas id="game-canvas"></canvas>

<!-- Back Button -->
<a href="{{ '/' | relative_url }}" class="back-btn">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
  Home
</a>

<!-- Joint Status HUD -->
<div class="joint-hud">
  <div class="hud-header">
    <div class="hud-header-icon"></div>
    <div class="hud-header-title">Joint Load Monitor</div>
  </div>
  <canvas id="joint-canvas" width="100" height="180"></canvas>
  <div class="joint-list">
    <div class="joint-item" data-joint="leftHip">
      <div class="joint-row">
        <span class="joint-name">L.Hip</span>
        <span class="joint-value">15.0%</span>
      </div>
      <div class="joint-bar"><div class="joint-bar-fill" style="width: 15%"></div></div>
    </div>
    <div class="joint-item" data-joint="rightHip">
      <div class="joint-row">
        <span class="joint-name">R.Hip</span>
        <span class="joint-value">15.0%</span>
      </div>
      <div class="joint-bar"><div class="joint-bar-fill" style="width: 15%"></div></div>
    </div>
    <div class="joint-item" data-joint="leftKnee">
      <div class="joint-row">
        <span class="joint-name">L.Knee</span>
        <span class="joint-value">15.0%</span>
      </div>
      <div class="joint-bar"><div class="joint-bar-fill" style="width: 15%"></div></div>
    </div>
    <div class="joint-item" data-joint="rightKnee">
      <div class="joint-row">
        <span class="joint-name">R.Knee</span>
        <span class="joint-value">15.0%</span>
      </div>
      <div class="joint-bar"><div class="joint-bar-fill" style="width: 15%"></div></div>
    </div>
    <div class="joint-item" data-joint="leftAnkle">
      <div class="joint-row">
        <span class="joint-name">L.Ankle</span>
        <span class="joint-value">15.0%</span>
      </div>
      <div class="joint-bar"><div class="joint-bar-fill" style="width: 15%"></div></div>
    </div>
    <div class="joint-item" data-joint="rightAnkle">
      <div class="joint-row">
        <span class="joint-name">R.Ankle</span>
        <span class="joint-value">15.0%</span>
      </div>
      <div class="joint-bar"><div class="joint-bar-fill" style="width: 15%"></div></div>
    </div>
  </div>
</div>

<!-- Minimap -->
<div class="minimap">
  <div class="minimap-header">Lab Map</div>
  <canvas id="minimap-canvas" class="minimap-canvas"></canvas>
</div>

<!-- Info Panel -->
<div class="info-panel" id="info-panel">
  <div class="info-panel-header">
    <div style="display: flex; align-items: center;">
      <span class="info-panel-icon"></span>
      <span class="info-panel-title"></span>
    </div>
    <button class="info-panel-close" onclick="closeInfoPanel()">&times;</button>
  </div>
  <div class="info-panel-body"></div>
</div>

<!-- Interaction Prompt -->
<div class="interact-prompt"></div>

<!-- Controls Hint (Desktop) -->
<div class="controls-hint">
  <div class="control-key">
    <div class="key-visual" data-key="W">W</div>
    <span class="key-label">Forward</span>
  </div>
  <div class="control-key">
    <div class="key-visual" data-key="A">A</div>
    <span class="key-label">Left</span>
  </div>
  <div class="control-key">
    <div class="key-visual" data-key="S">S</div>
    <span class="key-label">Back</span>
  </div>
  <div class="control-key">
    <div class="key-visual" data-key="D">D</div>
    <span class="key-label">Right</span>
  </div>
</div>

<!-- Mobile Joystick -->
<div class="joystick-container">
  <div class="joystick-base">
    <div class="joystick-stick"></div>
  </div>
</div>

<!-- Console Terminal -->
<div class="console-container minimized">
  <div class="console-header">
    <div class="console-title">
      <div class="console-dots">
        <span class="console-dot red"></span>
        <span class="console-dot yellow"></span>
        <span class="console-dot green"></span>
      </div>
      <span class="console-title-text">jiwon@lab ~ terminal</span>
    </div>
    <span class="console-toggle">Click to toggle</span>
  </div>
  <div class="console-body">
    <div class="console-output">
      <div class="console-line system">Welcome to Jiwon's Robotics Lab Terminal v1.0</div>
      <div class="console-line system">----------------------------------------------</div>
      <div class="console-line info">Use WASD to move the robot around the lab.</div>
      <div class="console-line info">Approach buildings and press E to interact.</div>
      <div class="console-line system">----------------------------------------------</div>
    </div>
    <div class="console-input-row">
      <span class="console-prompt-symbol">$</span>
      <input type="text" class="console-input" placeholder="Type a command..." autocomplete="off" spellcheck="false">
    </div>
  </div>
</div>

<!-- Google Sheets Guestbook Setup Script -->
<script>
// To enable guestbook, set your Google Apps Script Web App URL:
window.GUESTBOOK_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx7YmKNIIeKs2oIlbe_sQRm-XoO815NAJn3VBac_nV2K4HRbvZj7BTv4wWEGl6dsHXm/exec';

// See setup guide below for instructions.
</script>
