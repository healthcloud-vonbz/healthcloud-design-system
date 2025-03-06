import { DSColors } from '@/theme/colors';

export default {
  title: 'Design System/Colors',
};

const ColorBox = ({ name, color }: { name: string; color: string }) => (
  <div className="flex flex-col items-center space-y-2">
    <div
      className="w-16 h-16 rounded-lg shadow-md"
      style={{ backgroundColor: color }}
    />
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </div>
);

export const ColorPalette = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl text-center">Paleta de cores</h1>
      <div className="grid grid-cols-3 gap-6">
        {Object.entries(DSColors.ds_health).map(([category, value]) => {
          if (typeof value === 'string') {
            return <ColorBox key={category} name={category} color={value} />;
          } else if (typeof value === 'object') {
            return (
              <div
                className="my-10 text-center space-y-4 p-4 bg-slate-200"
                key={category}
              >
                <p className="font-bold">{category}</p>
                {Object.entries(value).map(([subKey, subValue]) => (
                  <ColorBox
                    key={`${category}-${subKey}`}
                    name={`${category}-${subKey}`}
                    color={subValue as string}
                  />
                ))}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
