import { useState, useEffect, useRef, useCallback } from 'react';
import styles from '@/styles/pages/projects/FightingGame.module.scss';

export const getStaticProps = (props) => {
  return {
    notFound: true,
    props: {},
  };
};

class Sprite {
  constructor(canvas, { position, velocity, gravity }) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.position = position;
    this.width = 10;
    this.height = 20;
    this.velocity = velocity;
    this.gravity = gravity;
    this.moveSpeed = 1;
  }

  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.draw();

    if (this.position.y + this.height < this.canvas.height) {
      this.velocity.y += this.gravity;

      if (
        this.position.y + this.velocity.y >
        this.canvas.height - this.height
      ) {
        this.position.y = this.canvas.height - this.height;
      } else {
        this.position.y += this.velocity.y;
      }
    }
  }

  moveLeft() {
    console.log('Move left');

    this.draw();

    if (this.position.x > 0) {
      this.position.x -= this.moveSpeed;
    }
  }

  moveRight() {
    console.log('Move right');

    this.draw();

    if (this.position.x + this.width < this.canvas.width) {
      this.position.x += this.moveSpeed;
    }
  }

  jump() {
    console.log('Jump');
  }

  crouch() {
    console.log('Crouch');
  }
}

const FightingGame = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [player, setPlayer] = useState(null);
  const [enemy, setEnemy] = useState();

  const animate = useCallback(() => {
    if (!player || !enemy || !ctx) return;

    window.requestAnimationFrame(animate);

    drawBackground(ctx);

    player.update();
    enemy.update();
  }, [player, enemy, ctx]);

  useEffect(() => {
    if (!canvasRef.current) return;

    setCtx(canvasRef.current.getContext('2d'));
  }, [canvasRef]);

  useEffect(() => {
    if (!ctx) return;

    setPlayer(
      new Sprite(canvasRef.current, {
        position: { x: 0, y: 0 },
        velocity: { x: 0, y: 0 },
        gravity: 0.2,
      })
    );

    setEnemy(
      new Sprite(canvasRef.current, {
        position: { x: 100, y: 0 },
        velocity: { x: 0, y: 0 },
        gravity: 0.2,
      })
    );

    drawBackground(ctx);
  }, [ctx]);

  useEffect(() => {
    if (!player || !enemy) return;

    window.addEventListener('keydown', (e) => {
      const { key } = e;

      console.log('key:', key);

      switch (key) {
        case 'w':
          player.jump();
          break;
        case 'a':
          player.moveLeft();
          break;
        case 's':
          player.crouch();
          break;
        case 'd':
          player.moveRight();
          break;
        case 'ArrowUp':
          enemy.jump();
          break;
        case 'ArrowLeft':
          enemy.moveLeft();
          break;
        case 'ArrowDown':
          enemy.crouch();
          break;
        case 'ArrowRight':
          enemy.moveRight();
          break;
      }
    });
  }, [player, enemy]);

  useEffect(() => {
    if (!window) return;

    animate();
  }, [animate]);

  const drawBackground = (ctx) => {
    // ctx.fillStyle = "#ddddbb";
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
      ></canvas>
    </div>
  );
};

export default FightingGame;
