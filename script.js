let roles = [];

// تحميل الأدوار من ملف JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    roles = data.defaultRoles.map(role => ({ ...role }));
    updateRolesUI(); // تحديث واجهة الأدوار بعد التحميل
  })
  .catch(error => {
    console.error("فشل تحميل ملف البيانات:", error);
    roles = [
      { id: 1, name: 'المستذئب', emoji: '🐺', color: '#dc2626', team: 'الأشرار', count: 0 },
      { id: 2, name: 'العراف', emoji: '🔮', color: '#7c3aed', team: 'الأخيار', count: 0 },
      { id: 3, name: 'الحارس', emoji: '🛡️', color: '#059669', team: 'الأخيار', count: 0 },
      { id: 4, name: 'القروي', emoji: '👨‍🌾', color: '#d97706', team: 'الأخيار', count: 0 },
      { id: 5, name: 'الساحرة', emoji: '🧙‍♀️', color: '#7c2d12', team: 'الأخيار', count: 0 },
      { id: 6, name: 'الصياد', emoji: '🏹', color: '#374151', team: 'الأخيار', count: 0 }
    ];
    updateRolesUI();
  });
