import { Component, OnDestroy } from '@angular/core';

interface WordCard { word: string; picture: string; hint: string; image?: string; }
interface LetterTile { id: number; letter: string; }

@Component({ selector: 'app-root', imports: [], templateUrl: './app.html', styleUrl: './app.scss' })
export class App implements OnDestroy {
  readonly cards: WordCard[] = [
    { word: 'КУЋА', picture: '🏠', hint: 'Место где живимо' },
    { word: 'ПАС', picture: '🐕', hint: 'Веран кућни љубимац' },
    { word: 'МАЧКА', picture: '🐈', hint: 'Животиња која преде' },
    { word: 'СУНЦЕ', picture: '☀️', hint: 'Греје и осветљава дан' },
    { word: 'МЕСЕЦ', picture: '🌙', hint: 'Видимо га ноћу на небу' },
    { word: 'ДРВО', picture: '🌳', hint: 'Има стабло, гране и лишће' },
    { word: 'ЦВЕТ', picture: '🌼', hint: 'Мирише и расте у башти' },
    { word: 'ЈАБУКА', picture: '🍎', hint: 'Округло воће црвене или зелене боје' },
    { word: 'КРУШКА', picture: '🍐', hint: 'Воће широко при дну' },
    { word: 'ЛОПТА', picture: '⚽', hint: 'Са њом се играмо и шутирамо је' },
    { word: 'АУТО', picture: '🚗', hint: 'Возило са четири точка' },
    { word: 'АВИОН', picture: '✈️', hint: 'Превози људе кроз ваздух' },
    { word: 'БРОД', picture: '🚢', hint: 'Плови по води' },
    { word: 'КЊИГА', picture: '📖', hint: 'Читамо је и учимо из ње' },
    { word: 'ОЛОВКА', picture: '✏️', hint: 'Њоме пишемо и цртамо' },
    { word: 'САТ', picture: '⏰', hint: 'Показује колико је времена' },
    { word: 'КЉУЧ', picture: '🔑', hint: 'Њиме откључавамо врата' },
    { word: 'СТОЛИЦА', picture: '🪑', hint: 'На њој седимо' },
    { word: 'ТЕЛЕФОН', picture: '📱', hint: 'Служи за разговор на даљину' },
    { word: 'РИБА', picture: '🐟', hint: 'Живи и плива у води' },
    { word: 'СТО', picture: '🪵', hint: 'На њему једемо и пишемо', image: 'images/words/sto.png' },
    { word: 'КУПУС', picture: '🥬', hint: 'Зелено поврће са много листова', image: 'images/words/kupus.png' },
    { word: 'СТОНОГА', picture: '🐛', hint: 'Мала животиња са много ногу' },
    { word: 'ЗУБ', picture: '🦷', hint: 'Њиме гриземо и жваћемо храну' },
    { word: 'ЗЕБРА', picture: '🦓', hint: 'Животиња са црним и белим пругама' },
    { word: 'ЗВОНО', picture: '🔔', hint: 'Звони када га протресемо' },
    { word: 'ЗМИЈА', picture: '🐍', hint: 'Гмиже и нема ноге' },
    { word: 'ЗМАЈ', picture: '🐉', hint: 'Бајковито биће које бљује ватру' },
    { word: 'КОЗА', picture: '🐐', hint: 'Животиња која даје млеко', image: 'images/words/koza.png' },
    { word: 'ПРОЗОР', picture: '🪟', hint: 'Кроз њега гледамо напоље' },
    { word: 'ВОЗ', picture: '🚂', hint: 'Креће се по шинама' },
    { word: 'ЦИГЛА', picture: '🧱', hint: 'Од ње се зида кућа' },
    { word: 'ЦИПЕЛА', picture: '👞', hint: 'Носимо је на стопалу' },
    { word: 'ЦРВ', picture: '🪱', hint: 'Мала животиња која живи у земљи' },
    { word: 'КОЦКА', picture: '🎲', hint: 'Има шест једнаких страна' },
    { word: 'БАЛОН', picture: '🎈', hint: 'Лаган је и пун ваздуха' },
    { word: 'МЕТЛА', picture: '🧹', hint: 'Њоме чистимо под' },
    { word: 'РАК', picture: '🦀', hint: 'Има клешта и живи поред воде' },
    { word: 'РАКЕТА', picture: '🚀', hint: 'Лети високо у свемир' },
    { word: 'РОДА', picture: '🐦', hint: 'Велика птица са дугим ногама', image: 'images/words/roda.png' },
    { word: 'РОБОТ', picture: '🤖', hint: 'Машина која извршава задатке' },
    { word: 'ТИГАР', picture: '🐅', hint: 'Велика мачка са пругама' },
    { word: 'МРАВ', picture: '🐜', hint: 'Ситан и веома вредан инсект' },
    { word: 'МАЧ', picture: '🗡️', hint: 'Оружје са дугим сечивом' },
    { word: 'КОЛАЧ', picture: '🍰', hint: 'Слаткиш који једемо за десерт', image: 'images/words/kolac.png' },
    { word: 'ЏАК', picture: '🎒', hint: 'Велика врећа за ношење ствари', image: 'images/words/dzak.png' },
    { word: 'ШАХ', picture: '♟️', hint: 'Игра се фигурама на табли' },
    { word: 'ШАТОР', picture: '⛺', hint: 'У њему спавамо када кампујемо' },
    { word: 'ШАЛ', picture: '🧣', hint: 'Носимо га око врата када је хладно' },
    { word: 'ШЕРПА', picture: '🍲', hint: 'У њој кувамо ручак' },
    { word: 'СВЕЋА', picture: '🕯️', hint: 'Гори и даје нам светлост' },
    { word: 'МИШ', picture: '🐁', hint: 'Мала животиња са дугим репом' },
    { word: 'МАШНА', picture: '🎀', hint: 'Украс везан у леп чвор' },
    { word: 'ЖАБА', picture: '🐸', hint: 'Скаче и живи поред воде' },
    { word: 'ЖИРАФА', picture: '🦒', hint: 'Животиња са веома дугим вратом' },
    { word: 'ЈЕЖ', picture: '🦔', hint: 'Мала животиња прекривена бодљама' },
    { word: 'ПУЖ', picture: '🐌', hint: 'Полако се креће и носи кућицу' },
    { word: 'ЋЕБЕ', picture: '🛏️', hint: 'Њиме се покривамо када спавамо' },
    { word: 'ХЛЕБ', picture: '🍞', hint: 'Пече се од брашна и једемо га уз оброк', image: 'images/words/hleb.png' },
    { word: 'ЛАВ', picture: '🦁', hint: 'Велика мачка са гривом' },
    { word: 'ЛЕТО', picture: '🏖️', hint: 'Најтоплије годишње доба' },
    { word: 'ЗИМА', picture: '❄️', hint: 'Најхладније годишње доба' },
    { word: 'ЈЕСЕН', picture: '🍂', hint: 'Годишње доба када опада лишће' },
    { word: 'ПРОЛЕЋЕ', picture: '🌷', hint: 'Годишње доба када природа цвета' },
    { word: 'ЛИМУН', picture: '🍋', hint: 'Жуто и кисело воће' },
    { word: 'ЛИСИЦА', picture: '🦊', hint: 'Шумска животиња риђег крзна' },
    { word: 'ГЛИСТА', picture: '🪱', hint: 'Дугачка животињица која живи у земљи' },
    { word: 'СЛОН', picture: '🐘', hint: 'Велика животиња са сурлом' },
    { word: 'ФЛАША', picture: '🍼', hint: 'У њој чувамо воду или сок', image: 'images/words/flasa.png' }
  ];

  current = this.cards[0]; tiles: LetterTile[] = []; slots: (LetterTile | null)[] = [];
  score = 0; round = 1; message = ''; solved = false; gameComplete = false;
  private tileId = 0;
  private readonly usedCardIndexes = new Set<number>();
  musicEnabled = true;
  private audioContext?: AudioContext;
  private musicGain?: GainNode;
  private musicTimer?: ReturnType<typeof setTimeout>;
  private musicStarted = false;

  constructor() {
    this.startRound();
    this.musicEnabled = localStorage.getItem('pisi-lako-music') !== 'off';
  }
  get placedIds(): Set<number> { return new Set(this.slots.flatMap(tile => tile ? [tile.id] : [])); }

  startRound(index?: number): void {
    const availableIndexes = this.cards.map((_, cardIndex) => cardIndex).filter(cardIndex => !this.usedCardIndexes.has(cardIndex));
    if (!availableIndexes.length) return;
    const shortestLength = Math.min(...availableIndexes.map(cardIndex => this.cards[cardIndex].word.length));
    const easiestIndexes = availableIndexes.filter(cardIndex => this.cards[cardIndex].word.length === shortestLength);
    const nextIndex = index !== undefined && easiestIndexes.includes(index)
      ? index
      : easiestIndexes[Math.floor(Math.random() * easiestIndexes.length)];
    this.usedCardIndexes.add(nextIndex);
    this.current = this.cards[nextIndex];
    this.slots = Array(this.current.word.length).fill(null);
    const extras = this.shuffle(['А', 'Е', 'И', 'О', 'Р', 'С', 'Т', 'М']).filter(letter => !this.current.word.includes(letter)).slice(0, 3);
    this.tiles = this.shuffle([...this.current.word, ...extras]).map(letter => ({ id: this.tileId++, letter }));
    this.message = ''; this.solved = false;
  }

  placeTile(tile: LetterTile, slotIndex?: number): void {
    if (this.solved || this.gameComplete || this.placedIds.has(tile.id)) return;
    const target = slotIndex ?? this.slots.findIndex(slot => slot === null);
    if (target < 0 || this.slots[target]) return;
    this.slots[target] = tile; this.slots = [...this.slots]; this.checkAnswer();
  }
  removeTile(index: number): void { if (!this.solved) { this.slots[index] = null; this.slots = [...this.slots]; this.message = ''; } }
  dragStart(event: DragEvent, tile: LetterTile): void { event.dataTransfer?.setData('text/plain', String(tile.id)); if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move'; }
  drop(event: DragEvent, index: number): void { event.preventDefault(); const tile = this.tiles.find(item => item.id === Number(event.dataTransfer?.getData('text/plain'))); if (tile) this.placeTile(tile, index); }
  nextRound(): void {
    if (this.gameComplete) return;
    this.round++;
    this.startRound();
  }
  skipRound(): void {
    if (this.solved || this.gameComplete) return;
    if (this.usedCardIndexes.size === this.cards.length) {
      this.gameComplete = true;
      this.message = `Крај игре! Освојено поена: ${this.score}. Покушај поново! ⭐`;
      return;
    }
    this.nextRound();
  }
  restartGame(): void {
    this.usedCardIndexes.clear();
    this.score = 0;
    this.round = 1;
    this.gameComplete = false;
    this.startRound();
  }
  resetWord(): void { if (!this.solved) { this.slots = Array(this.current.word.length).fill(null); this.message = ''; } }

  startMusicAfterInteraction(): void {
    if (this.musicEnabled && !this.musicStarted) this.startMusic();
  }

  toggleMusic(): void {
    this.musicEnabled = !this.musicEnabled;
    localStorage.setItem('pisi-lako-music', this.musicEnabled ? 'on' : 'off');
    if (this.musicEnabled) this.startMusic();
    else this.stopMusic();
  }

  ngOnDestroy(): void { this.stopMusic(); this.audioContext?.close(); }

  private startMusic(): void {
    this.audioContext ??= new AudioContext();
    if (this.audioContext.state === 'suspended') void this.audioContext.resume();
    if (!this.musicGain) {
      this.musicGain = this.audioContext.createGain();
      this.musicGain.connect(this.audioContext.destination);
    }
    this.musicGain.gain.setTargetAtTime(0.055, this.audioContext.currentTime, 0.4);
    this.musicStarted = true;
    this.scheduleMelody();
  }

  private stopMusic(): void {
    if (this.musicTimer) clearTimeout(this.musicTimer);
    this.musicTimer = undefined;
    if (this.musicGain && this.audioContext) this.musicGain.gain.setTargetAtTime(0, this.audioContext.currentTime, 0.12);
    this.musicStarted = false;
  }

  private scheduleMelody(): void {
    if (!this.audioContext || !this.musicGain || !this.musicEnabled) return;
    const notes = [261.63, 329.63, 392, 523.25, 440, 392, 329.63, 293.66, 349.23, 440, 392, 329.63];
    const start = this.audioContext.currentTime + 0.08;
    notes.forEach((frequency, index) => this.playSoftNote(frequency, start + index * 0.52, 0.42));
    this.musicTimer = setTimeout(() => this.scheduleMelody(), notes.length * 520 + 900);
  }

  private playSoftNote(frequency: number, start: number, duration: number): void {
    if (!this.audioContext || !this.musicGain) return;
    const oscillator = this.audioContext.createOscillator();
    const noteGain = this.audioContext.createGain();
    oscillator.type = 'sine'; oscillator.frequency.value = frequency;
    noteGain.gain.setValueAtTime(0.0001, start);
    noteGain.gain.exponentialRampToValueAtTime(0.42, start + 0.06);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(noteGain); noteGain.connect(this.musicGain);
    oscillator.start(start); oscillator.stop(start + duration + 0.02);
  }

  private checkAnswer(): void {
    if (this.slots.some(slot => slot === null)) return;
    if (this.slots.map(slot => slot?.letter).join('') === this.current.word) {
      this.solved = true;
      this.score += 10;
      this.gameComplete = this.usedCardIndexes.size === this.cards.length;
      this.message = this.gameComplete
        ? `Сјајно! Стигао/стигла си до краја игре! Освојено поена: ${this.score}. 🏆`
        : 'Браво! Тачно си написао/написала реч! 🎉';
      this.playFeedback(true);
    }
    else {
      this.message = 'Покушај поново. Додирни слово да га вратиш.';
      this.playFeedback(false);
    }
  }

  private playFeedback(correct: boolean): void {
    if (!this.musicEnabled) return;
    this.audioContext ??= new AudioContext();
    const context = this.audioContext;
    if (context.state === 'suspended') void context.resume();
    const start = context.currentTime + 0.02;
    const frequencies = correct ? [523.25, 659.25, 783.99] : [740, 520];
    frequencies.forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const noteStart = start + index * (correct ? 0.12 : 0.27);
      const duration = correct ? 0.24 : 0.2;
      oscillator.type = correct ? 'sine' : 'square';
      oscillator.frequency.setValueAtTime(frequency, noteStart);
      if (!correct) oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.75, noteStart + duration);
      gain.gain.setValueAtTime(0.0001, noteStart);
      gain.gain.exponentialRampToValueAtTime(correct ? 0.18 : 0.24, noteStart + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + duration);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
      oscillator.start(noteStart);
      oscillator.stop(noteStart + duration + 0.02);
    });
  }
  private shuffle<T>(items: T[]): T[] { const result = [...items]; for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; } return result; }
}
