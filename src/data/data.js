// ==========================================
// 乃木坂46 生写真レートシステム データ
// ==========================================
// レートは市場レートの倍率（定価比）
//   1.0 = 定価
//   2.0 = 定価の2倍
//   0.5 = 定価の0.5倍
// ==========================================

// 生写真種別（直近6種）
export const photoSeries = [
  { id: 'p1', name: '35th「チャンスは平等」', date: '2024-04', single: 35 },
  { id: 'p2', name: '36th「チートデイ」', date: '2024-08', single: 36 },
  { id: 'p3', name: '37th「歩道橋」', date: '2024-12', single: 37 },
  { id: 'p4', name: '38th「ネーブルオレンジ」', date: '2025-03', single: 38 },
  { id: 'p5', name: '39th「Same numbers」', date: '2025-07', single: 39 },
  { id: 'p6', name: '40th「ビリヤニ」', date: '2025-11', single: 40 },
];

// 現メンバー一覧
// gen: 3 = 3期生, 4 = 4期生, 5 = 5期生, 6 = 6期生
export const members = [
  // 3期生（4名）
  { id: 'm01', name: '梅澤美波', gen: 3, captain: true },
  { id: 'm02', name: '伊藤理々杏', gen: 3, captain: false },
  { id: 'm03', name: '岩本蓮加', gen: 3, captain: false },
  { id: 'm04', name: '吉田綾乃クリスティー', gen: 3, captain: false },
  // 4期生（10名）
  { id: 'm05', name: '遠藤さくら', gen: 4, captain: false },
  { id: 'm06', name: '筒井あやめ', gen: 4, captain: false },
  { id: 'm07', name: '賀喜遥香', gen: 4, captain: false },
  { id: 'm08', name: '黒見明香', gen: 4, captain: false },
  { id: 'm09', name: '金川紗耶', gen: 4, captain: false },
  { id: 'm10', name: '佐藤璃果', gen: 4, captain: false },
  { id: 'm11', name: '柴田柚菜', gen: 4, captain: false },
  { id: 'm12', name: '田村真佑', gen: 4, captain: false },
  { id: 'm13', name: '弓木奈於', gen: 4, captain: false },
  { id: 'm14', name: '林瑠奈', gen: 4, captain: false },
  // 5期生（11名）
  { id: 'm15', name: '池田瑛紗', gen: 5, captain: false },
  { id: 'm16', name: '奥田いろは', gen: 5, captain: false },
  { id: 'm17', name: '川﨑桜', gen: 5, captain: false },
  { id: 'm18', name: '菅原咲月', gen: 5, captain: false },
  { id: 'm19', name: '中西アルノ', gen: 5, captain: false },
  { id: 'm20', name: '冨里奈央', gen: 5, captain: false },
  { id: 'm21', name: '五百城茉央', gen: 5, captain: false },
  { id: 'm22', name: '一ノ瀬美空', gen: 5, captain: false },
  { id: 'm23', name: '井上和', gen: 5, captain: false },
  { id: 'm24', name: '岡本姫奈', gen: 5, captain: false },
  { id: 'm25', name: '小川彩', gen: 5, captain: false },
  // 6期生（11名・2025年2月加入）
  { id: 'm26', name: '海邉朱莉', gen: 6, captain: false },
  { id: 'm27', name: '長嶋凛桜', gen: 6, captain: false },
  { id: 'm28', name: '瀬戸口心月', gen: 6, captain: false },
  { id: 'm29', name: '川端晃菜', gen: 6, captain: false },
  { id: 'm30', name: '矢田萌華', gen: 6, captain: false },
  { id: 'm31', name: '愛宕心響', gen: 6, captain: false },
  { id: 'm32', name: '小津玲奈', gen: 6, captain: false },
  { id: 'm33', name: '大越ひなの', gen: 6, captain: false },
  { id: 'm34', name: '鈴木佑捺', gen: 6, captain: false },
  { id: 'm35', name: '増田三莉音', gen: 6, captain: false },
  { id: 'm36', name: '森平麗心', gen: 6, captain: false },
];

// ==========================================
// レートデータ
// ratings[memberId][seriesId] = レート値（倍率）
// null = その種に生写真なし・未登録
// ==========================================
export const ratingsData = {
  // 3期生
  'm01': { p1: 3.5, p2: 3.3, p3: 3.8, p4: 4.2, p5: null, p6: null }, // 梅澤美波
  'm02': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 伊藤理々杏
  'm03': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 岩本蓮加
  'm04': { p1: 2.2, p2: 2.1, p3: 2.3, p4: 2.4, p5: null, p6: null }, // 吉田綾乃クリスティー
  // 4期生
  'm05': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 遠藤さくら
  'm06': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 筒井あやめ
  'm07': { p1: 4.5, p2: 4.3, p3: 4.7, p4: 5.0, p5: null, p6: null }, // 賀喜遥香
  'm08': { p1: 1.7, p2: 1.6, p3: 1.8, p4: 1.9, p5: null, p6: null }, // 黒見明香
  'm09': { p1: 1.4, p2: 1.3, p3: 1.5, p4: 1.6, p5: null, p6: null }, // 金川紗耶
  'm10': { p1: 2.7, p2: 2.6, p3: 2.8, p4: 3.1, p5: null, p6: null }, // 佐藤璃果
  'm11': { p1: 1.3, p2: 1.2, p3: 1.4, p4: 1.5, p5: null, p6: null }, // 柴田柚菜
  'm12': { p1: 2.4, p2: 2.3, p3: 2.5, p4: 2.7, p5: null, p6: null }, // 田村真佑
  'm13': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 弓木奈於
  'm14': { p1: 2.5, p2: 2.4, p3: 2.6, p4: 2.8, p5: null, p6: null }, // 林瑠奈
  // 5期生
  'm15': { p1: 3.3, p2: 3.5, p3: 3.8, p4: 4.5, p5: null, p6: null }, // 池田瑛紗
  'm16': { p1: 2.6, p2: 2.8, p3: 3.0, p4: 3.5, p5: null, p6: null }, // 奥田いろは
  'm17': { p1: 2.0, p2: 2.1, p3: 2.3, p4: 2.6, p5: null, p6: null }, // 川﨑桜
  'm18': { p1: 3.2, p2: 3.4, p3: 3.6, p4: 4.0, p5: null, p6: null }, // 菅原咲月
  'm19': { p1: 2.3, p2: 2.4, p3: 2.5, p4: 2.9, p5: null, p6: null }, // 中西アルノ
  'm20': { p1: 1.5, p2: 1.6, p3: 1.7, p4: 1.9, p5: null, p6: null }, // 冨里奈央
  'm21': { p1: 3.8, p2: 4.0, p3: 4.3, p4: 4.8, p5: null, p6: null }, // 五百城茉央
  'm22': { p1: 2.1, p2: 2.2, p3: 2.4, p4: 2.7, p5: null, p6: null }, // 一ノ瀬美空
  'm23': { p1: 3.0, p2: 3.1, p3: 3.3, p4: 3.8, p5: null, p6: null }, // 井上和
  'm24': { p1: 2.2, p2: 2.3, p3: 2.5, p4: 2.8, p5: null, p6: null }, // 岡本姫奈
  'm25': { p1: null, p2: 1.5, p3: 1.6, p4: 1.8, p5: null, p6: null }, // 小川彩（36th初選抜）
  // 6期生（p1-p3は加入前のため null、p4以降は登録待ち）
  'm26': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 海邉朱莉
  'm27': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 長嶋凛桜
  'm28': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 瀬戸口心月
  'm29': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 川端晃菜
  'm30': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 矢田萌華
  'm31': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 愛宕心響
  'm32': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 小津玲奈
  'm33': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 大越ひなの
  'm34': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 鈴木佑捺
  'm35': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 増田三莉音
  'm36': { p1: null, p2: null, p3: null, p4: null, p5: null, p6: null }, // 森平麗心
};

// ==========================================
// ユーティリティ関数
// ==========================================

/** 直近N種のレート一覧を取得 */
export function getRecentRates(memberId, n = 5) {
  const seriesIds = photoSeries.slice(-n).map(s => s.id);
  const memberRates = ratingsData[memberId] || {};
  return seriesIds.map(sid => ({
    seriesId: sid,
    series: photoSeries.find(s => s.id === sid),
    rate: memberRates[sid] ?? null,
  }));
}

/** 直近N種のアベレージを計算 */
export function getAverageRate(memberId, n = 5) {
  const rates = getRecentRates(memberId, n)
    .map(r => r.rate)
    .filter(r => r !== null);
  if (rates.length === 0) return null;
  return rates.reduce((a, b) => a + b, 0) / rates.length;
}

/** 最新1種のレートを取得 */
export function getLatestRate(memberId) {
  const latest = photoSeries[photoSeries.length - 1];
  return ratingsData[memberId]?.[latest.id] ?? null;
}

/** 特定の種でのメンバー一覧をレート降順で取得 */
export function getMembersRankedBySeries(seriesId) {
  return members
    .map(m => ({
      ...m,
      rate: ratingsData[m.id]?.[seriesId] ?? null,
    }))
    .filter(m => m.rate !== null)
    .sort((a, b) => b.rate - a.rate);
}

/** レートに応じた色クラスを返す */
export function getRateColorClass(rate) {
  if (rate === null) return 'text-gray-400';
  if (rate >= 5.0) return 'text-purple-600 font-bold';
  if (rate >= 4.0) return 'text-red-500 font-bold';
  if (rate >= 3.0) return 'text-orange-500 font-semibold';
  if (rate >= 2.0) return 'text-yellow-600';
  if (rate >= 1.5) return 'text-green-600';
  return 'text-gray-500';
}

/** レートに応じた背景色クラス */
export function getRateBgClass(rate) {
  if (rate === null) return 'bg-gray-100';
  if (rate >= 5.0) return 'bg-purple-100';
  if (rate >= 4.0) return 'bg-red-50';
  if (rate >= 3.0) return 'bg-orange-50';
  if (rate >= 2.0) return 'bg-yellow-50';
  if (rate >= 1.5) return 'bg-green-50';
  return 'bg-gray-50';
}

/** 期生ラベル */
export function getGenLabel(gen) {
  return `${gen}期生`;
}

/** 期生ごとの背景色 */
export function getGenBadgeClass(gen) {
  switch (gen) {
    case 3: return 'bg-blue-100 text-blue-700';
    case 4: return 'bg-emerald-100 text-emerald-700';
    case 5: return 'bg-violet-100 text-violet-700';
    case 6: return 'bg-rose-100 text-rose-700';
    default: return 'bg-gray-100 text-gray-600';
  }
}
